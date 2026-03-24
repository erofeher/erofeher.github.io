# API Documentation Sample

This is a sanitized sample for portfolio purposes.

Version: 0.0
Date: November 23

Data Platform Application REST API
User Manual
Overview
Welcome to the Data Platform Application REST API user manual. This API provides access to hydrological data and watersheds, precipitation, and streamflow calculations. It is hosted on a cloud platform, ensuring scalability and reliability.
Authentication is required to access the API. We use API keys to authenticate users. To obtain an API key, please contact our support team at support@hydrologyapp.com. Include your organization name and intended usage in the request.
Endpoints
The Data Platform Application REST API offers various endpoints to access hydrological data and calculations. Each endpoint serves a specific purpose, allowing users to retrieve watersheds, precipitation, and streamflow information.
These endpoints are designed to assist you in retrieving hydrological data, making informed decisions, and conducting analyses related to watersheds and the associated precipitation and streamflow data.
Watersheds
The "Get Watersheds" endpoint allows you to retrieve a list of available watersheds. Each watershed is associated with a unique ID, a name, and its geographical location. This endpoint provides essential information about the watersheds, making it easy to identify and select the one of interest for further analysis or data retrieval.
Endpoint: `/watersheds`
GET `/watersheds`: Retrieve a list of available watersheds.
GET `/watersheds/{id}`: Get information about a specific watershed by ID.
Precipitation
The "Get Precipitation Data" endpoint enables you to access historical precipitation data for a specific watershed. By providing the unique ID of the watershed, you can retrieve a time-series of precipitation records. This data is valuable for hydrological and environmental studies, allowing you to analyze and understand the precipitation patterns in a particular geographic area over time.
Endpoint: `/precipitation`
GET `/precipitation/{watershed_id}`: Get precipitation data for a specific watershed.
Streamflow
The "Get Streamflow Data" endpoint provides access to historical streamflow data for a specific watershed. By specifying the unique ID of the watershed, you can retrieve a time-series of streamflow records. Streamflow data is essential for hydrological and environmental studies, as it allows you to analyze and understand the flow of water in a particular geographic area over time. This information is valuable for flood risk assessment, water resource management, and various other applications related to hydrology.
Endpoint: `/streamflow`
GET `/streamflow/{watershed_id}`: Get streamflow data for a specific watershed.
API Rate Limit
To ensure fair usage, we implement rate limiting on the API. Users are allowed a specific number of requests per minute. The rate limits are as follows:
100 requests per minute for free-tier users.
500 requests per minute for premium-tier users.

Error Handling
The API uses HTTP status codes to indicate the success or failure of requests. In case of an error, the response will include a JSON object with details about the error. Please refer to the API documentation for a list of possible error codes and their meanings.
Response Format
The API returns responses in JSON format. Each response will contain the appropriate data and, when applicable, metadata such as timestamps and units.
Sample Requests and Responses
In this section, we provide sample HTTP requests and their corresponding responses for the key API endpoints. These samples demonstrate how to interact with the Data Platform Application REST API effectively. By reviewing these examples, you'll gain a clear understanding of the request structure and the format of the data returned in the API responses. These samples serve as practical references for integrating the API into your applications and workflows.
Get Watersheds
Request:
http
GET /watersheds
Authorization: Bearer YOUR_API_KEY

Response:
json
HTTP 200 OK
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

Get Precipitation Data
Request:
http
GET /precipitation/1
Authorization: Bearer YOUR_API_KEY

Response:
json
HTTP 200 OK
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

