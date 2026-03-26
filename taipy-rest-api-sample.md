# API Documentation Sample

This is a sanitized sample for portfolio purposes.

**Version:** 1.0  
**Last Updated:** November 2023  

---

## Overview

The Analytics Platform REST API provides a REST interface for interacting with core platform functionalities. It enables automation and integration of analytics workflows within a broader system architecture.

Using this API, you can manage platform entities such as:

- Data nodes  
- Jobs  
- Tasks  
- Scenarios  
- Pipelines  

This makes it suitable for integration into complex data and analytics ecosystems.

---

## Getting Started

To expose the REST API, you need to start the REST service.

### Basic Setup

1. Configure your core application.
2. Initialize the REST service.
3. Run the application.

### Example Configuration

```python
from taipy import Config

Config.configure_global_app(
    testing=True,
    env="production",
    secret_key="your-secret-key"
)
```

### Running the Service

```python
import taipy as tp

rest_service = tp.Rest()
tp.run(rest_service)
```

---

## Runtime Behavior

When the service starts, it will run locally:

```
http://127.0.0.1:5000
```

Typical console output:

- Flask app initialized  
- Debug mode disabled  
- Service running locally  

---

## Example API Request

### Retrieve Data Nodes

**Endpoint**
```
GET /api/v1/datanodes/
```

**cURL Example**
```bash
curl -X GET http://localhost:5000/api/v1/datanodes/
```

---

## Example Response

```json
[
  {
    "id": "DATANODE_001",
    "name": "forecast_data",
    "type": "pickle",
    "version": "latest"
  },
  {
    "id": "DATANODE_002",
    "name": "historical_data",
    "type": "csv",
    "version": "latest"
  }
]
```

---

## Key Concepts

- REST-based architecture  
- JSON responses  
- Local deployment  
- Extensible design  

---

## Use Cases

- Automating analytics workflows  
- Integrating data pipelines  
- Managing platform resources programmatically  
- Supporting internal tools and dashboards  

---

## Notes

This documentation sample has been simplified and sanitized for portfolio purposes.  
All sensitive or proprietary details have been removed.
