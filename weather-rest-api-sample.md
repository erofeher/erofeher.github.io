# Weather API

## Overview

The Weather API provides access to current weather conditions and forecast data for specific locations.  
It is designed for applications that require real-time weather insights and future predictions.

Base URL:

```
https://api.example.com/v1
```

---

## Authentication

All requests require an API key passed in the header:

```
Authorization: Bearer YOUR_API_KEY
```

---

## Endpoints

### GET /weather/current

Retrieve current weather conditions for a specific location.

#### Query Parameters

| Name     | Type   | Required | Description                         |
|----------|--------|----------|-------------------------------------|
| location | string | Yes      | Name of the city or location        |

---

#### Example Request

```
GET /weather/current?location=NewYork
```

---

#### Example Response

```json
{
  "location": "NewYork",
  "current_conditions": "Partly cloudy",
  "temperature": "68°F",
  "humidity": "45%",
  "wind_speed": "5 mph"
}
```

---

## GET /weather/forecast

Retrieve a 7-day weather forecast for a specific location.

#### Query Parameters

| Name     | Type   | Required | Description                         |
|----------|--------|----------|-------------------------------------|
| location | string | Yes      | Name of the city or location        |

---

#### Example Request

```
GET /weather/forecast?location=NewYork
```

---

#### Example Response

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

---

## Rate Limits

The API allows up to **100 requests per hour per IP address**.

If the limit is exceeded, the API returns:

```
429 Too Many Requests
```

---

## Error Handling

The API may return the following error responses:

| Status Code | Description                          |
|------------|--------------------------------------|
| 400        | Bad Request – Missing parameters      |
| 404        | Not Found – Invalid location          |
| 429        | Too Many Requests – Rate limit hit    |
| 500        | Internal Server Error                 |

---

## Notes

- Ensure valid location input for accurate results.
- Implement caching for frequently requested data.
- Always handle API errors gracefully in your application.

---

## About This Sample

This is a sanitized API documentation sample created for portfolio purposes, demonstrating structure, clarity, and best practices in technical writing.
