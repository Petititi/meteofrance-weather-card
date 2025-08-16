

# Météo France Weather Card

A Lovelace card for Home Assistant that displays temperature and rain forecasts for the next 24 hours from Météo France.

## Features

- Displays temperature and rain forecasts in a graphical format
- Fetches data directly from Météo France API
- Easy to configure and integrate with Home Assistant

## Installation

1. **Install via HACS**:
   - Search for "Météo France Weather Card" in the HACS store
   - Click "Download this repository" and follow the installation instructions

2. **Manual installation**:
   - Download the repository
   - Copy the `meteofrance-weather-card.js` file to your `www` directory
   - Add the card to your Lovelace dashboard

## Configuration

```yaml
type: 'custom:meteofrance-weather-card'
title: 'Next 24 Hours Forecast'
location_id: '441430'  # Your location ID
```

## Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | `custom:meteofrance-weather-card` | The type of the card |
| title | string | `Next 24 Hours Forecast` | Title of the card |
| location_id | string | `441430` | Your Météo France location ID |

## Example

```yaml
type: 'custom:meteofrance-weather-card'
title: 'Weather Forecast'
location_id: '441430'
```

## Screenshots

![Example screenshot of the card](https://github.com/Petititi/meteofrance-weather-card/raw/master/screenshot.png)

## Development

To contribute to this project:

1. Fork the repository
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License.
