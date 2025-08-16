

# 24h MeteoFrance

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/Petititi/meteofrance-weather-card.svg)](https://github.com/Petititi/meteofrance-weather-card/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Petititi/meteofrance-weather-card/blob/master/LICENSE)

A Lovelace card for Home Assistant that displays temperature and rain forecasts for the next 24 hours from Météo France.

## Features

- Displays temperature and rain forecasts in a graphical format
- Fetches data directly from Météo France API
- Easy to configure and integrate with Home Assistant

## Installation

### Option 1: Install via HACS (Recommended)

1. Ensure you have [HACS](https://hacs.xyz/) installed
2. Search for "24h MeteoFrance" in the HACS store
3. Click "Download" and follow the installation instructions

### Option 2: Manual installation

1. Download the latest release from [GitHub releases](https://github.com/Petititi/meteofrance-weather-card/releases)
2. Copy the `24h-meteofrance.js` file to your Home Assistant `www` directory
3. Add the card as a resource in your Lovelace dashboard

## Configuration

```yaml
type: 'custom:24h-meteofrance'
title: 'Next 24 Hours Forecast'
location_id: '441430'  # Your location ID
```

## Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| type | string | `custom:24h-meteofrance` | The type of the card |
| title | string | `Next 24 Hours Forecast` | Title of the card |
| location_id | string | `441430` | Your Météo France location ID |

## Example

```yaml
type: 'custom:24h-meteofrance'
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
