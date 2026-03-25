# Hydrology API

## Overview

The Hydrology API provides access to watershed information, precipitation records, and streamflow data through REST endpoints.  
It is designed for applications and workflows that require structured environmental data for analysis, monitoring, and reporting.

This API enables users to:
- Retrieve available watersheds.
- Access historical precipitation data.
- Access historical streamflow data.
- Work with JSON-based responses for downstream analysis.

---

## Base URL

```
https://api.example.com/v1
```

---

## Authentication

All requests require authentication via API key:

```
Authorization: Bearer YOUR_API_KEY
```

---

## Endpoints

### GET /watersheds

Retrieve a list of available watersheds.

#### Example Request

```
GET /watersheds
```

#### Example Response

```json
{
  "watersheds": [
    {
      "id": 1,
      "name": "Mississippi River",
      "location": "United States"
    },
    {
      "id": 2,
      "name": "Amazon River",
      "location": "South America"
    }
  ]
}
```

---

### GET /watersheds/{id}

Retrieve information about a specific watershed by ID.

#### Path Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id   | int  | Yes      | Watershed identifier |

---

### GET /precipitation/{watershed_id}

Retrieve historical precipitation data for a specific watershed.

#### Path Parameters

| Name         | Type | Required | Description |
|--------------|------|----------|-------------|
| watershed_id | int  | Yes      | Watershed identifier |

#### Example Request

```
GET /precipitation/1
```

#### Example Response

```json
{
  "watershed_id": 1,
  "precipitation_data": [
    {
      "date": "2023-10-01",
      "precipitation_mm": 25.4
    },
    {
      "date": "2023-10-02",
      "precipitation_mm": 10.2
    }
  ]
}
```

---

### GET /streamflow/{watershed_id}

Retrieve historical streamflow data for a specific watershed.

#### Path Parameters

| Name         | Type | Required | Description |
|--------------|------|----------|-------------|
| watershed_id | int  | Yes      | Watershed identifier |

#### Example Request

```
GET /streamflow/1
```

#### Example Response

```json
{
  "watershed_id": 1,
  "streamflow_data": [
    {
      "date": "2023-10-01",
      "streamflow_cms": 340.5
    },
    {
      "date": "2023-10-02",
      "streamflow_cms": 322.1
    }
  ]
}
```

---

## Rate Limits

The API supports tier-based rate limits:

- Free tier: **100 requests per minute**
- Premium tier: **500 requests per minute**

---

## Response Format

All responses are returned in **JSON** format and may include metadata such as timestamps, units, and watershed identifiers.

---

## Error Handling

| Status Code | Description |
|-------------|-------------|
| 400         | Bad Request – Invalid request parameters |
| 401         | Unauthorized – Missing API key |
| 404         | Not Found – Watershed or resource not found |
| 429         | Too Many Requests – Rate limit exceeded |
| 500         | Internal Server Error |

---

## Notes

- Use watershed identifiers to retrieve precipitation and streamflow data for a specific region.
- Validate request parameters before sending requests.
- Consider caching frequently requested data where appropriate.

---

## About This Sample

This is a sanitized API documentation sample created for portfolio purposes, demonstrating structure, clarity, and best practices in technical writing.
