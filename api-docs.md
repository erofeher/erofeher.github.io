# API Documentation Sample – Payment Service

## Overview

The Payment Service API allows client applications to create payments, retrieve payment details, and check transaction status.

**Base URL**

```text
https://api.example.com/v1
```

## Authentication

All requests require a bearer token in the `Authorization` header.

```http
Authorization: Bearer YOUR_API_TOKEN
```

## Endpoints

### `POST /payments`

Creates a new payment.

#### Request Body

```json
{
  "amount": 100.00,
  "currency": "EUR",
  "customer_id": "cust_12345",
  "reference": "INV-2026-001"
}
```

#### Response

```json
{
  "payment_id": "pay_78910",
  "status": "pending",
  "amount": 100.00,
  "currency": "EUR"
}
```

### `GET /payments/{payment_id}`

Returns payment details for the specified payment.

#### Example Response

```json
{
  "payment_id": "pay_78910",
  "status": "completed",
  "amount": 100.00,
  "currency": "EUR",
  "created_at": "2026-03-24T10:15:00Z"
}
```

### `GET /payments/{payment_id}/status`

Returns the latest processing status.

#### Example Response

```json
{
  "payment_id": "pay_78910",
  "status": "completed"
}
```

## Error Handling

| Status Code | Meaning | Description |
|---|---|---|
| 400 | Bad Request | The request body is invalid or missing required fields. |
| 401 | Unauthorized | The bearer token is missing or invalid. |
| 404 | Not Found | The payment ID does not exist. |
| 500 | Server Error | An unexpected server-side error occurred. |

## Notes

- Use idempotency keys for retry-safe payment creation.
- Store `payment_id` for reconciliation and status tracking.
- All timestamps are returned in UTC.
