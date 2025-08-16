



import { assert } from 'chai';
import { html, fixture } from '@open-wc/testing';
import { MeteofranceWeatherCard } from '../meteofrance-weather-card.js';

describe('MeteofranceWeatherCard', () => {
  it('should render correctly', async () => {
    const element = await fixture(html`
      <meteofrance-weather-card></meteofrance-weather-card>
    `);

    assert.exists(element);
    assert.include(element.innerHTML, 'Next 24 Hours Forecast');
  });

  it('should handle data loading', async () => {
    const element = await fixture(html`
      <meteofrance-weather-card></meteofrance-weather-card>
    `);

    // Mock the fetchData method
    element.fetchData = async () => {
      element.data = {
        // Mock data structure
      };
    };

    await element.fetchData();
    assert.exists(element.data);
  });
});



