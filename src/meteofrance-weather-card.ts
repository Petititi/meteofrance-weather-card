
import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HomeAssistant, LovelaceCardConfig } from 'custom-card-helpers';
import { LovelaceCardEditor } from 'custom-card-helpers';

interface MeteofranceWeatherCardConfig extends LovelaceCardConfig {
  location_id?: string;
  title?: string;
}

interface WeatherData {
  // Define the actual structure based on the API response
  [key: string]: any;
}

@customElement('meteofrance-weather-card')
class MeteofranceWeatherCard extends LitElement implements LovelaceCard {
  @property() public hass!: HomeAssistant;
  @property() public config!: MeteofranceWeatherCardConfig;
  @property() private data: WeatherData | null = null;
  @property() private error: string | null = null;

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
    `;
  }

  private async fetchData() {
    try {
      this.error = null;
      this.data = null;

      const locationId = this.config.location_id || '441430';
      const response = await fetch(`https://rpcache-aa.meteofrance.com/internet2018client/2.0/forecast?id=${locationId}&instants=&day=5&token=__Wj7dVSTjV9YGu1guveLyDq0g7S7TfTjaHBTPTpO0kj8__`);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data: WeatherData = await response.json();
      this.data = data;
    } catch (error) {
      this.error = 'Error fetching weather data';
      console.error('Fetch error:', error);
    }
  }

  private renderGraph() {
    if (!this.data) return html``;

    // Process data to extract temperature and rain information
    // In a real implementation, you would parse the actual data structure
    // from the Météo France API. This is a placeholder.
    const temps: number[] = [];
    const rains: number[] = [];
    const labels: string[] = [];

    for (let i = 0; i < 24; i++) {
      temps.push(Math.random() * 10 + 15); // Random temp between 15-25°C
      rains.push(Math.random() * 5); // Random rain between 0-5mm
      labels.push(`${i}:00`);
    }

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
    let path = `M 0 ${scaleY - values[0] * (scaleY / 30)}`;
    for (let i = 1; i < values.length; i++) {
      path += ` L ${i * (maxX / values.length)} ${scaleY - values[i] * (scaleY / 30)}`;
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
          ${this.data ? this.renderGraph() : html`<div class="loading">Loading weather data...</div>`}
        </div>
      </ha-card>
    `;
  }
}

class MeteofranceWeatherCardEditor extends LovelaceCardEditor {
  static getStub(): MeteofranceWeatherCardConfig {
    return {
      type: 'custom:meteofrance-weather-card',
      title: 'Météo France Weather',
      location_id: '441430', // Default location ID
    };
  }
}

customElements.define('meteofrance-weather-card-editor', MeteofranceWeatherCardEditor);
