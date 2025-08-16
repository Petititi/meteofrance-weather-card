
import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';
import { LovelaceCardEditor } from 'custom-card-helpers';

interface MeteofranceWeatherCardConfig extends LovelaceCardConfig {
  location_id?: string;
  title?: string;
  type?: string;
}

interface WeatherData {
  forecast: Array<{
    time: string;
    T?: number; // Temperature in Celsius
    rain_1h?: number; // Rain in mm for the last hour
    rain_3h?: number; // Rain in mm for the last 3 hours
    rain_6h?: number; // Rain in mm for the last 6 hours
    rain_12h?: number; // Rain in mm for the last 12 hours
    rain_24h?: number; // Rain in mm for the last 24 hours
  }>;
  // Other fields may be present but are not used in this implementation
}

@customElement('meteofrance-weather-card')
class MeteofranceWeatherCard extends LitElement {
  @property() public hass!: HomeAssistant;
  @property() public config!: MeteofranceWeatherCardConfig;
  @property() private data: WeatherData | null = null;
  @property() private error: string | null = null;
  @property() private loading: boolean = false;

  static get styles() {
    return css`
      .card-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .loading {
        font-style: italic;
        color: #666;
      }
      .error {
        color: red;
      }
      .graph-container {
        width: 100%;
        max-width: 600px;
        margin-top: 16px;
      }
      .temp-line {
        stroke: #ff9800;
        stroke-width: 2;
      }
      .rain-line {
        stroke: #42a5f5;
        stroke-width: 2;
      }
      .axis-label {
        font-size: 12px;
        fill: #666;
      }
      .refresh-button {
        margin-top: 8px;
        cursor: pointer;
        color: #666;
        font-size: 14px;
      }
      .refresh-button:hover {
        color: #333;
      }
    `;
  }

  private async fetchData() {
    try {
      this.error = null;
      this.data = null;
      this.loading = true;

      const locationId = this.config.location_id || '441430';
      const response = await fetch(`https://rpcache-aa.meteofrance.com/internet2018client/2.0/forecast?id=${locationId}&instants=&day=5&token=__Wj7dVSTjV9YGu1guveLyDq0g7S7TfTjaHBTPTpO0kj8__`);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: HTTP ${response.status}`);
      }

      const data: WeatherData = await response.json();

      // Validate that we have the expected data structure
      if (!data.forecast || !Array.isArray(data.forecast)) {
        throw new Error('Invalid data format: missing forecast data');
      }

      this.data = data;
    } catch (error) {
      if (error instanceof Error) {
        this.error = `Error fetching weather data: ${error.message}`;
      } else {
        this.error = 'Error fetching weather data';
      }
      console.error('Fetch error:', error);
    } finally {
      this.loading = false;
    }
  }

  private renderGraph() {
    if (!this.data) return html``;

    // Process data to extract temperature and rain information
    const temps: number[] = [];
    const rains: number[] = [];
    const labels: string[] = [];

    // Get the current time and filter forecast data for the next 24 hours
    const now = new Date();
    const forecastData = this.data.forecast || [];

    // Filter data for the next 24 hours
    const next24HoursData = forecastData.filter((forecast: any) => {
      const forecastTime = new Date(forecast.time);
      return forecastTime >= now && forecastTime <= new Date(now.getTime() + 24 * 60 * 60 * 1000);
    }).slice(0, 24); // Take up to 24 data points

    // If we don't have enough data, pad with the last available value
    while (next24HoursData.length < 24 && forecastData.length > 0) {
      next24HoursData.push(next24HoursData[next24HoursData.length - 1]);
    }

    // Process the data
    next24HoursData.forEach((forecast: any) => {
      const temp = forecast.T !== undefined ? forecast.T : 0;
      const rain = forecast.rain_1h !== undefined ? forecast.rain_1h : 0;

      temps.push(temp);
      rains.push(rain);

      const forecastTime = new Date(forecast.time);
      labels.push(`${forecastTime.getHours()}:00`);
    });

    return html`
      <div class="graph-container">
        <svg width="100%" height="200">
          <g transform="translate(40, 180)">
            <!-- X axis -->
            <line x1="0" y1="0" x2="560" y2="0" stroke="#ddd" stroke-width="1"/>
            <!-- Y axis -->
            <line x1="0" y1="0" x2="0" y2="-160" stroke="#ddd" stroke-width="1"/>

            <!-- Temperature line -->
            <path class="temp-line" d=${this.createPath(temps, 160, 0, 560)} />
            <!-- Rain line -->
            <path class="rain-line" d=${this.createPath(rains, 160, 0, 560)} />

            <!-- X axis labels -->
            ${labels.map((label, i) => html`
              <text x=${i * 24} y="20" class="axis-label" text-anchor="middle">${label}</text>
            `)}

            <!-- Y axis labels -->
            <text x="-10" y="-20" class="axis-label" text-anchor="end">30°C</text>
            <text x="-10" y="-80" class="axis-label" text-anchor="end">20°C</text>
            <text x="-10" y="-140" class="axis-label" text-anchor="end">10°C</text>
          </g>
        </svg>
      </div>
    `;
  }

  private createPath(values: number[], scaleY: number, minY: number, maxX: number): string {
    // Handle empty array case
    if (values.length === 0) return '';

    // Handle first point
    const firstValue = values[0] !== undefined ? values[0] : 0;
    let path = `M 0 ${scaleY - firstValue * (scaleY / 30)}`;

    // Handle remaining points
    for (let i = 1; i < values.length; i++) {
      const value = values[i] !== undefined ? values[i] : 0;
      path += ` L ${i * (maxX / values.length)} ${scaleY - value * (scaleY / 30)}`;
    }

    return path;
  }

  protected updated(changedProperties: PropertyValues) {
    if (changedProperties.has('hass')) {
      this.fetchData();
    }
  }

  public setConfig(config: MeteofranceWeatherCardConfig): void {
    if (!config.location_id) {
      throw new Error('You need to define a location_id');
    }

    this.config = config;
  }

  public getCardSize(): number {
    return 3;
  }

  protected render() {
    return html`
      <ha-card>
        <div class="card-content">
          <div class="card-header">
            <h2>${this.config.title || 'Next 24 Hours Forecast'}</h2>
          </div>
          ${this.error ? html`<div class="error">${this.error}</div>` : ''}
          ${this.loading ? html`<div class="loading">Loading weather data...</div>` : ''}
          ${this.data && !this.loading ? this.renderGraph() : ''}
          ${this.data ? html`<div class="refresh-button" @click=${this.fetchData}>↻ Refresh</div>` : ''}
        </div>
      </ha-card>
    `;
  }
}

@customElement('meteofrance-weather-card-editor')
class MeteofranceWeatherCardEditor extends LitElement {
  static getStub(): MeteofranceWeatherCardConfig {
    return {
      type: 'custom:meteofrance-weather-card',
      title: 'Météo France Weather',
      location_id: '441430', // Default location ID
    };
  }
}

customElements.define('meteofrance-weather-card-editor', MeteofranceWeatherCardEditor);
