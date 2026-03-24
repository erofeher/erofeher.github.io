# API Documentation Sample

This is a sanitized sample for portfolio purposes.

Version: 0.0
Date: November 23

Save Metadata Mapping REST API

Overview
The Save Metadata Mapping REST API saves metadata mappings for each type of work item of category Alerts. These mappings can then later be used to ingest the information from alerts from external systems, enabling the incoming data fields to be mapped:
to the corresponding ABC fields in an ABC work item of category Alerts for the root item.
to the corresponding ABC and/or DEF fields of work items of the relevant categories for the root alert's associated entities.

The mapping files can be submitted in one of two forms - draft or production, determined by the draft Boolean parameter. This must be set in the JSON file or the API will fail.
If the draft parameter is set to 1, it is a draft mapping file. If a draft mapping file with the same name for the same Alert category work item already exists, it is replaced by the newly submitted file.
If the draft parameter is set to 0, it is a production mapping file. If a production mapping file with the same name for the same Alert category work item already exists, it is replaced by the newly submitted file.
The API:
Takes a JSON input with sample data and mappings of the external system's fields to ABC fields, including custom fields, or DEF fields.
Verifies that the input field data types match the expected types for their corresponding ABC fields, including custom fields, or DEF fields.
Saves the mapping with a unique name in ABC for future reference so ABC will know how to map incoming alerts of the same type in the future.
Parameters
Syntax
Request type: POST
URL: /api/v1/md/work-item-types/{workItemTypeIdentifier}/mappings

URL Parameters
workItemTypeIdentifier – The Alerts category work item whose mapping is to be saved.

Body Parameters
mappings – The JSON input, including the sample data and the field mappings.

Response
The response object has the following form:
{
status: <true\false>,
}

status indicates whether the mapping was saved successfully or failed.

Example body JSON format
{
name: <mapping-name>,
sampleData: <JSON-sample-file-content>, description: <description>,
fileType: JSON, //must be in capital letters dateFormat: <date time format – JAVA syntax> draft: <true\false>, \\ must be provided root: {
path: <root path> businessUnitIdentifier: <BU identifier>, fields: [
{ identifier: cust1, path: a },
{ identifier: cust2, path: b },
{ identifier: cust3, path: c.d.e },
{ ... }
],
children: [
{
workItemTypeIdentifier: party,
path: c.d.f, multiple: false,
relationTypeIdentifier: rel_iden_01, businessUnitIdentifier: <BU identifier>, fields: [
{ identifier: first_name, path: details.fn },
{ identifier: last_name, path: details.ln },
{ ... }
],
children: [ ... ]
},
{ ... }
]
}
}

To ingest an alert, a default business unit (BU) is required for each object in the alert's JSON file. 


It must be specified in at least one of the following ways (in order of precedence):
via a mapped field in the body parameters. 
as a query parameter.
in the mapping file.
A default BU can be specified in the mapping file:
as a root parameter, for example:
root: {
path: <root path> businessUnitIdentifier: <BU identifier>,
in the root's field parameters, for example:
fields: [
{ identifier: alertDate, path: data.alertDate },
{ identifier: buIdentifier, path: data.bu },
],
