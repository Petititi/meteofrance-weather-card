

/**
 * Test script to verify that the meteofrance-weather-card.ts changes work correctly
 */

// Mock the fetch function to return test data
global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      forecast: [
        { time: '2025-08-16T00:00:00Z', T: 18, rain_1h: 0 },
        { time: '2025-08-16T01:00:00Z', T: 17, rain_1h: 0 },
        { time: '2025-08-16T02:00:00Z', T: 16, rain_1h: 0 },
        { time: '2025-08-16T03:00:00Z', T: 15, rain_1h: 0 },
        { time: '2025-08-16T04:00:00Z', T: 14, rain_1h: 0 },
        { time: '2025-08-16T05:00:00Z', T: 13, rain_1h: 0 },
        { time: '2025-08-16T06:00:00Z', T: 12, rain_1h: 0 },
        { time: '2025-08-16T07:00:00Z', T: 11, rain_1h: 0 },
        { time: '2025-08-16T08:00:00Z', T: 10, rain_1h: 0 },
        { time: '2025-08-16T09:00:00Z', T: 9, rain_1h: 0 },
        { time: '2025-08-16T10:00:00Z', T: 8, rain_1h: 0 },
        { time: '2025-08-16T11:00:00Z', T: 7, rain_1h: 0 },
        { time: '2025-08-16T12:00:00Z', T: 6, rain_1h: 0 },
        { time: '2025-08-16T13:00:00Z', T: 5, rain_1h: 0 },
        { time: '2025-08-16T14:00:00Z', T: 4, rain_1h: 0 },
        { time: '2025-08-16T15:00:00Z', T: 3, rain_1h: 0 },
        { time: '2025-08-16T16:00:00Z', T: 2, rain_1h: 0 },
        { time: '2025-08-16T17:00:00Z', T: 1, rain_1h: 0 },
        { time: '2025-08-16T18:00:00Z', T: 0, rain_1h: 0 },
        { time: '2025-08-16T19:00:00Z', T: -1, rain_1h: 0 },
        { time: '2025-08-16T20:00:00Z', T: -2, rain_1h: 0 },
        { time: '2025-08-16T21:00:00Z', T: -3, rain_1h: 0 },
        { time: '2025-08-16T22:00:00Z', T: -4, rain_1h: 0 },
        { time: '2025-08-16T23:00:00Z', T: -5, rain_1h: 0 },
        { time: '2025-08-17T00:00:00Z', T: -6, rain_1h: 0 },
      ]
    })
  });
});

// Import the card
import { MeteofranceWeatherCard } from '../src/meteofrance-weather-card';

// Test the card
describe('MeteofranceWeatherCard', () => {
  let card;

  beforeEach(() => {
    card = new MeteofranceWeatherCard();
    card.config = {
      location_id: '441430',
      title: 'Test Weather Card'
    };
  });

  test('should fetch data on initialization', async () => {
    // Mock the HomeAssistant property
    card.hass = {};

    // Call updated to trigger data fetch
    card.updated(new Map([['hass', {}]]));

    // Wait for the fetch to complete
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify that fetch was called
    expect(fetch).toHaveBeenCalled();

    // Verify that data was processed
    expect(card.data).toBeDefined();
    expect(card.data.forecast).toHaveLength(24);

    // Verify that the first forecast item has the correct structure
    const firstForecast = card.data.forecast[0];
    expect(firstForecast).toHaveProperty('time');
    expect(firstForecast).toHaveProperty('T');
    expect(firstForecast).toHaveProperty('rain_1h');
  });

  test('should handle errors during fetch', async () => {
    // Mock fetch to fail
    fetch.mockImplementationOnce(() => Promise.reject(new Error('Network error')));

    // Mock the HomeAssistant property
    card.hass = {};

    // Call updated to trigger data fetch
    card.updated(new Map([['hass', {}]]));

    // Wait for the fetch to complete
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify that fetch was called
    expect(fetch).toHaveBeenCalled();

    // Verify that error was set
    expect(card.error).toBeDefined();
    expect(card.error).toContain('Error fetching weather data');
  });

  test('should render graph with real data', async () => {
    // Mock the HomeAssistant property
    card.hass = {};

    // Call updated to trigger data fetch
    card.updated(new Map([['hass', {}]]));

    // Wait for the fetch to complete
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify that data was fetched
    expect(card.data).toBeDefined();

    // Render the card
    const rendered = card.render();

    // Verify that the rendered output contains the graph
    expect(rendered).toBeDefined();
    expect(rendered.toString()).toContain('graph-container');
    expect(rendered.toString()).toContain('svg');
    expect(rendered.toString()).toContain('path');
  });
});
