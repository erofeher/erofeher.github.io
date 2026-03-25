# Metadata Mapping API

## Overview

The Metadata Mapping API allows saving mapping configurations for specific work item types.  
These mappings define how external system data fields are mapped to internal platform fields.

The API enables:
- Mapping external alert data to internal data structures.
- Supporting structured ingestion of incoming data.
- Reusing mapping configurations for future processing.

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

## Endpoint

### POST /md/work-item-types/{workItemTypeIdentifier}/mappings

Save a metadata mapping configuration for a specific work item type.

---

## Path Parameters

| Name                   | Type   | Required | Description                                      |
|------------------------|--------|----------|--------------------------------------------------|
| workItemTypeIdentifier | string | Yes      | Identifier of the work item type to map          |

---

## Request Body

The request body must contain a JSON object with mapping configuration details.

### Required Fields

| Name        | Type    | Description                                   |
|------------|--------|-----------------------------------------------|
| name        | string | Unique mapping name                           |
| sampleData  | object | Example input data                            |
| fileType    | string | Must be `JSON`                                |
| draft       | boolean| Indicates draft or production mapping         |
| root        | object | Root mapping configuration                    |

---

## Example Request

```json
{
  "name": "sample-mapping",
  "sampleData": {},
  "fileType": "JSON",
  "dateFormat": "yyyy-MM-dd",
  "draft": true,
  "root": {
    "path": "root",
    "businessUnitIdentifier": "BU_01",
    "fields": [
      {
        "identifier": "cust1",
        "path": "a"
      }
    ]
  }
}
```

---

## Response

```json
{
  "status": true
}
```

---

## Mapping Behavior

- If `draft` is set to `true`, the mapping is saved as a draft.
- If `draft` is set to `false`, the mapping is saved as production.
- Existing mappings with the same name are replaced.

---

## Business Unit Requirement

A default Business Unit (BU) must be provided for each object.

It can be defined in one of the following ways:

1. As a mapped field in the request body.
2. As a query parameter.
3. Directly in the mapping configuration.

---

## Example Configuration

```json
{
  "root": {
    "path": "data",
    "businessUnitIdentifier": "BU_01",
    "fields": [
      {
        "identifier": "alertDate",
        "path": "data.alertDate"
      },
      {
        "identifier": "buIdentifier",
        "path": "data.bu"
      }
    ]
  }
}
```

---

## Error Handling

| Status Code | Description                          |
|------------|--------------------------------------|
| 400        | Bad Request – Invalid input           |
| 401        | Unauthorized – Missing API key        |
| 404        | Not Found – Invalid identifier        |
| 500        | Internal Server Error                 |

---

## Notes

- Ensure JSON structure is valid before submitting requests.
- Validate field mappings to avoid type mismatches.
- Use consistent naming for mapping configurations.

---

## About This Sample

This is a sanitized API documentation sample created for portfolio purposes, demonstrating structure, clarity, and best practices in technical writing.
