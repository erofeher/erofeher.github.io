---
layout: default
title: Weather API
---

## Overview

The Weather API provides access to current weather conditions and forecast data for specific locations.

It is designed for applications that require real-time weather insights and future predictions.

## Base URL

```text
https://api.example.com/v1
```

## Authentication

All requests require an API key passed in the header.

```http
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### `GET /weather/current`

Retrieves current weather conditions for a specific location.

#### Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `location` | string | Yes | Name of the city or location |

#### Example request

```http
GET /weather/current?location=NewYork
```

#### Example response

```json
{
  "location": "NewYork",
  "current_conditions": "Partly cloudy",
  "temperature": "68°F",
  "humidity": "45%",
  "wind_speed": "5 mph"
}
```

### `GET /weather/forecast`

Retrieves a 7-day weather forecast for a specific location.

#### Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `location` | string | Yes | Name of the city or location |

#### Example request

```http
GET /weather/forecast?location=NewYork
```

#### Example response

```json
{
  "location": "NewYork",
  "forecast": [
    {
      "day": "Monday",
      "conditions": "Sunny",
      "high": "70°F",
      "low": "50°F"
    },
    {
      "day": "Tuesday",
      "conditions": "Cloudy",
      "high": "72°F",
      "low": "55°F"
    }
  ]
}
```

## Rate limits

The API allows up to **100 requests per hour per IP address**.

If the limit is exceeded, the API returns:

```text
429 Too Many Requests
```

## Error handling

| Status code | Description |
|---|---|
| 400 | Bad Request – Missing parameters |
| 404 | Not Found – Invalid location |
| 429 | Too Many Requests – Rate limit hit |
| 500 | Internal Server Error |

## Notes

- Ensure valid location input for accurate results.
- Implement caching for frequently requested data.
- Always handle API errors gracefully in your application.

## About this sample

This is a sanitized API documentation sample created for portfolio purposes, demonstrating structure, clarity, and best practices in technical writing.
