# API Documentation Sample

This is a sanitized sample for portfolio purposes.

Version: 0.0
Date: November 23

Analytics Platform REST API
User Manual
Overview
The Analytics Platform REST package is a Python library designed to provide a REST server on top of Analytics Platform Core, facilitating the automation of Analytics Platform Core functionalities by exposing REST APIs.
The Analytics Platform REST APIs enable users to create, read, update, execute, and remove Analytics Platform entities, which include cycles, scenarios, sequences, tasks, jobs, and data nodes, through REST APIs. Please consult the Core Concepts documentation for more comprehensive information about Analytics Platform entities.
This capability becomes especially valuable when integrating a Analytics Platform application within a complex IT ecosystem.

Running the Analytics Platform REST Server
To expose the Analytics Platform REST APIs, you must first start the Analytics Platform REST server. Follow these steps:
Configure your Analytics Platform Core application. Refer to the Core Configuration documentation for detailed information on Analytics Platform Core configuration.
The REST server typically does not require any additional configuration in most use cases. However, advanced users may choose to configure the Analytics Platform REST server. The Analytics Platform REST server relies on Flask and exposes three Flask parameters:
`testing`: A boolean parameter used to run the Flask application in testing mode. The default value is `False`.
`env`: An optional string parameter used as the application environment.
`secret_key`: An optional parameter used as the application server secret key.
You can set these parameters using the `GlobalAppConfig` properties as shown in the example below:
from taipy import Config
Config.configure_global_app(testing=True,
                            env="production",
                            secret_key="5f352379324c22463451387a0aec5d2f")
Finally, you can run the Analytics Platform REST server with the following code:
import taipy as tp
rest_service = tp.Rest()
tp.run(rest_service)

The output of the above Python code execution will be as follows:
Serving Flask app 'taipy.rest.app' (lazy loading)
Environment: None
Debug mode: off
Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
When running the Analytics Platform REST server, you will also run Core.

Running the REST Service with Other Analytics Platform Services
To run the Analytics Platform REST service alongside other Analytics Platform services, please refer to the `taipy.run()` function page. Once your Analytics Platform REST server is up and running, the REST APIs become accessible. You can use any REST client to make HTTP requests to the various exposed APIs. A comprehensive list of APIs is available in the REST API Reference Manual.
Here is a simple usage example of a Analytics Platform REST API, demonstrating how to retrieve all data nodes using either the curl command-line REST client or a Python REST client (the requests package).
curl -X GET https://localhost:5000/api/v1/datanodes/
In this example, the REST server exposes APIs on localhost on port 5000. To retrieve all data nodes, use the `GET` HTTP method to call the data nodes entry point without any parameters.
The output of this call will be a list of all existing data nodes in JSON format. In this example, two data nodes are returned as follows:

[{
    "last_edit_date": null,
    "scope": "Scope.SCENARIO",
    "id": "DATANODE_forecast_value_bb9b2709-baef-494f-92e5-87fbb8d11e71",
    "validity_seconds": null,
    "validity_days": null,
    "storage_type": "pickle",
    "job_ids": [],
    "version": "latest",
    "cacheable": false,
    "edit_in_progress": false,
    "name": "First forecast_value data node",
    "owner_id": "SCENARIO_my_awesome_scenario_c6e73df8-5508-41f8-a8e5-c6b1f9cd4c73",
    "config_id": "forecast_value"
}, {
    "last_edit_date": "2022-08-04T17:12:10.973318",
    "scope": "Scope.SCENARIO",
    "id": "DATANODE_historical_data_set_bb6b2da2-5810-43a7-9e49-006bf402010f",
    "validity_seconds": null,
    "validity_days": null,
    "storage_type": "csv",
    "job_ids": [],
    "version": "latest",
    "cacheable": false,
    "edit_in_progress": false,
    "name": "historical data",
    "owner_id": "SCENARIO_my_awesome_scenario_5ed1582b-7b5c-4d62-8f7c-5c4ee9ee721a",
    "config_id": "historical_data_set"
}]
This example demonstrates how to retrieve data nodes using the Analytics Platform REST API, either through a command-line client like `curl` or a Python client using the `requests` package.


