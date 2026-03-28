# Compliance Monitor – User Guide

**Product:** Compliance Monitor  
**Version:** XY  
**Audience:** Compliance Analysts, Investigators, Administrators  
**Document Type:** User Guide Sample

> **Note on structure:** This guide is organized into five parts reflecting the natural user journey — from onboarding (Part I), through day-to-day investigation work (Part II), to research and analytics (Part III), system configuration (Part IV), and administration (Part V).

---

## Legal Notice

This document serves informational and training purposes only. All product names, rule names, thresholds, and configuration values used in this guide are generic examples. This document does not contain proprietary, confidential, or customer-specific information.

---

## Table of Contents

**Part I – Getting Started**
1. [Overview](#1-overview)
2. [User Interface](#2-user-interface)

**Part II – Investigation Workflow**
3. [Investigating Alerts](#3-investigating-alerts)
4. [Alert Work Item Details](#4-alert-work-item-details)
5. [Managing Cases](#5-managing-cases)
6. [Reviewing Outgoing Forms](#6-reviewing-outgoing-forms)

**Part III – Research & Analysis**
7. [Detection and Research Tool & Peer Group Activity Reports](#7-detection-and-research-tool--peer-group-activity-reports)
8. [Visual Analytics Tuning](#8-visual-analytics-tuning)
9. [Solution Insights](#9-solution-insights)

**Part IV – Configuration**
10. [Adjusting Thresholds and Scoring](#10-adjusting-thresholds-and-scoring)
11. [Tuning Rule Settings](#11-tuning-rule-settings)
12. [Maintaining Lists](#12-maintaining-lists)
13. [Policy Manager](#13-policy-manager)
14. [Processed Transactions Log](#14-processed-transactions-log)

**Part V – Administration**
15. [Managing Users, Groups, and Roles](#15-managing-users-groups-and-roles)

- [Appendix A – Navigation Reference](#appendix-a--navigation-reference)
- [Appendix B – Query Rule Templates Overview](#appendix-b--query-rule-templates-overview)

---

---

## Part I – Getting Started

---

## 1. Overview

### 1.1 About this Guide

This guide describes how to use Compliance Monitor to investigate alerts, manage cases, configure detection rules, and administer users. It is intended for compliance analysts, investigators, and system administrators working within a financial institution's compliance operations team.

This guide requires that the Compliance Monitor application has been installed and configured by your system administrator. For installation and configuration details, refer to the separate Installation Guide.

### 1.2 What's New in this Version

This version of Compliance Monitor includes the following enhancements:

- **Improved alert navigation**: The alert details page has been redesigned with a tabbed interface for faster access to related information.
- **Predictive scoring view**: Analysts can now view a machine-learning-based risk score alongside traditional rule-based scores.
- **Manual alert creation via API**: Administrators can create manual alerts programmatically using the REST API.
- **Enhanced party card**: The party card now includes a consolidated view of related accounts, related parties, and transaction history.
- **Visual Analytics Tuning**: A new dashboard provides graphical tools for threshold and score factor analysis.

For a full list of changes, refer to the Release Notes.

### 1.3 About Compliance Monitor

Compliance Monitor is a financial crime detection and investigation platform designed to help compliance teams detect suspicious activity, investigate alerts, manage regulatory reporting, and tune detection rules. The solution processes transactional and customer data to generate alerts based on configurable detection models.

Key capabilities include:

- Rule-based and model-based alert generation
- Multi-entity analysis (accounts, parties, organizations)
- Case management and regulatory form creation
- Detection and Research Tool (DART) for on-demand investigation
- Policy Manager for creating and activating custom detection rules
- Threshold tuning and visual analytics

### 1.4 Introduction to the Application

Compliance Monitor integrates with your organization's core banking and data infrastructure. Data is ingested on a scheduled basis (daily or monthly cycles), processed by the detection engine, and surfaced as alerts in the user interface.

Users interact with the application through a web-based interface organized into functional modules: Work Items (alerts), Cases, Forms, Lists, Settings, DART, and Reports. Access to each module is controlled by role-based permissions configured by the system administrator.

---

## 2. User Interface

### 2.1 Application Layout

The Compliance Monitor interface is organized into the following areas:

| Area | Description |
|---|---|
| **Navigation Bar** | Top-level links to all application modules |
| **Module Tabs** | Secondary navigation within each module |
| **View Bar** | Filter and search controls for the current list view |
| **List Area** | Displays work items, cases, or records matching current filters |
| **Detail Pane** | Shows details of the selected record |
| **Action Toolbar** | Buttons for performing actions on selected records |

### 2.2 Module Tabs

The application is divided into modules accessible from the top navigation bar. Common modules include:

- **Work Items** – View and manage open alerts assigned to you or your group
- **Cases** – View and manage investigation cases
- **Forms** – Review and submit regulatory forms
- **Lists** – Maintain reference lists used by detection rules
- **Settings** – Configure thresholds, scoring, and detection rule parameters
- **DART** – Run on-demand queries against transaction and entity data
- **Reports** – Access pre-built and saved reports

### 2.3 Application Links and Global Features

The top navigation bar provides access to global features available from any page:

- **Home** – Return to the default landing page
- **Search** – Perform a global search across entities and alerts
- **Notifications** – View system notifications and messages
- **User Profile** – Manage personal preferences and password
- **Help** – Access context-sensitive help documentation
- **Log out** – End the current session

### 2.4 View Bar: Search and Filter

Each module includes a View Bar that allows users to filter and search the list of records displayed in the List Area.

**Common filter options include:**

- Date range (created date, last modified date)
- Status (open, closed, pending)
- Assignment (my items, my group's items, unassigned)
- Alert type or case type
- Priority or risk score range

To apply a filter, select the desired values in the View Bar and click **Apply**. To clear filters, click **Reset**.

Saved views allow users to store frequently used filter combinations for quick access. Saved views are accessible from the View Bar dropdown.

### 2.5 List Area

The List Area displays records matching the current filter criteria. Features of the List Area include:

- **Column sorting**: Click any column header to sort ascending or descending
- **Column configuration**: Show or hide columns using the column selector
- **Multi-select**: Select multiple records to apply bulk actions
- **Row click**: Click any row to open the detail view for that record
- **Pagination**: Navigate through large result sets using page controls

### 2.6 Paging Options

By default, the List Area displays 25 records per page. Change the page size to 10, 25, 50, or 100 records per page using the paging control at the bottom of the list.

Use the **Previous** and **Next** buttons to navigate between pages, or enter a specific page number in the page input field.

### 2.7 Logging In (Multi-Org Environments)

In deployments that support multiple organizations or tenants, users select their organization from a dropdown at the sign-in page before entering their credentials. After signing in, the session is scoped to the selected organization.

To switch organizations, log out and log back in, selecting the desired organization at the sign-in page.

---

---

## Part II – Investigation Workflow

---

## 3. Investigating Alerts

### 3.1 Work Items Overview

Work items are alerts generated by the detection engine when entity behavior meets the criteria defined in one or more detection rules. Each work item represents a potential instance of suspicious activity that requires review by a compliance analyst.

Work items are assigned a status, a priority score, and a workflow step. They can be assigned to individual users or user groups for investigation.

### 3.2 Alert Views

The Work Items module provides several predefined views to help users focus on relevant alerts:

| View | Description |
|---|---|
| **My Items** | Alerts currently assigned to the logged-in user |
| **My Group's Items** | Alerts assigned to any member of the user's group |
| **Unassigned** | Alerts not yet assigned to any user or group |
| **All Open Items** | All alerts with an open status |
| **Closed Items** | Alerts that have been closed or resolved |
| **High Priority** | Alerts with a risk score above a configurable threshold |

### 3.3 Work Items List

The Work Items list displays alert records matching the current view and filter settings. Key columns in the list include:

- **Alert ID** – Unique identifier for the alert
- **Entity Name** – Name of the account, party, or organization associated with the alert
- **Alert Type** – The detection rule or model that generated the alert
- **Score** – Risk score calculated at the time of alert generation
- **Status** – Current workflow status (e.g., Open, Under Review, Closed)
- **Step** – Current workflow step
- **Assigned To** – User or group currently responsible for the alert
- **Created Date** – Date the alert was generated
- **Priority** – Numeric or categorical priority assigned to the alert

### 3.4 Work Items Toolbar

The toolbar above the Work Items list provides action buttons that can be applied to selected alerts.

#### 3.4.1 Advanced Sort

Use Advanced Sort to apply multi-level sorting to the list. Sort by up to three columns simultaneously, with configurable ascending or descending direction for each.

#### 3.4.2 Change Step

Use **Change Step** to move selected alerts forward or backward in the workflow. A dialog displays the available workflow steps based on your role permissions. Adding a note or attachment may be required when changing steps.

To filter the list of available steps, enter a search term in the search box within the Change Step dialog.

#### 3.4.3 Assign

Use **Assign** to reassign selected alerts to a different user or group. Select the target user or group from the dropdown and optionally add a note explaining the reason for reassignment.

#### 3.4.4 Add Note

Use **Add Note** to add a free-text annotation to selected work items. Notes are stored in the alert history and visible to all users with access to the alert.

#### 3.4.5 View Notes

Use **View Notes** to display all notes previously added to a work item, including the author, timestamp, and note text.

#### 3.4.6 Add Attachments

Use **Add Attachments** to upload supporting documents to selected work items. Supported file types include PDF, Word, Excel, and image formats.

#### 3.4.7 View Attachments

Use **View Attachments** to list and download files previously attached to a work item.

#### 3.4.8 Print List / Print Details

- **Print List** exports the current list view to a print-friendly format.
- **Print Details** exports the details of the selected work item to a print-friendly format.

#### 3.4.9 Show as PDF

**Show as PDF** generates a PDF version of the selected work item's details page, suitable for archiving or sharing outside the system.

#### 3.4.10 Export

**Export** downloads the current list or selected records to a CSV or Excel file for external analysis.

#### 3.4.11 Send Mail

**Send Mail** opens a dialog to compose and send an email notification regarding the selected work item. The email is sent to recipients within or outside the system.

#### 3.4.12 New Case

**New Case** creates a new investigation case and links the selected alert(s) to it. A dialog prompts you to enter a case name, type, and optional description.

#### 3.4.13 Add to Existing Case

**Add to Existing Case** links selected alerts to an existing open case. Use the search dialog to find the target case by ID, name, or date.

#### 3.4.14 Edit Item

**Edit Item** allows authorized users to modify certain fields on a work item, such as the priority or custom attributes.

#### 3.4.15 Change Score

**Change Score** allows authorized users to override the system-calculated risk score with a manually assigned score. A reason for the change must be recorded.

#### 3.4.16 View History

**View History** displays the full audit trail for a work item, including all status changes, step transitions, score overrides, and user actions with timestamps.

#### 3.4.17 Delete

**Delete** permanently removes selected work items. This action is restricted to users with administrative permissions and cannot be undone.

#### 3.4.18 Create a Manual Party Alert

**Create a Manual Party Alert** creates an alert for a specific party without waiting for the next detection cycle. This is useful when an analyst identifies suspicious activity outside automated detection.

### 3.5 Advanced Entity Search

Use Advanced Entity Search to locate accounts, parties, or organizations directly from the Work Items module.

#### 3.5.1 Performing an Advanced Entity Search

To perform a search:

1. Click **Advanced Entity Search** in the toolbar.
2. Select the entity type (Account, Party, or Organization).
3. Enter one or more search criteria in the filter fields.
4. Click **Search** to display matching results.
5. Click a result row to navigate to that entity's details page.

Search criteria vary by entity type and may include identifiers, names, geographic attributes, or risk classifications.

#### 3.5.2 Advanced Search Window Options

The Advanced Search window provides additional options to refine your query:

- **Match type**: Exact match or contains
- **Case sensitivity**: Toggle case-sensitive matching
- **Maximum results**: Limit the number of records returned
- **Sort order**: Control how results are ordered

### 3.6 Viewing Account Details

The Account Details page provides a comprehensive view of a specific account's reference data and transaction history.

#### 3.6.1 Header Pane

The header pane displays key account identifiers, the account's current risk classification, and summary statistics for the current detection period.

#### 3.6.2 All Tab

The All tab consolidates information from all other tabs into a single scrollable view, useful for quick review.

#### 3.6.3 Reference Data Tab

The Reference Data tab displays static account attributes such as account type, opening date, region, currency, holding branch, and associated party information.

#### 3.6.4 Transactional Activity Tab

The Transactional Activity tab displays aggregated transaction statistics for the account, organized by time period and transaction type.

#### 3.6.5 Detection Results Tab

The Detection Results tab lists all detection rule occurrences for the account, showing which rules triggered, the score contributed by each rule, and the detection period.

### 3.7 Viewing External Party Details

The External Party Details page displays reference and transactional information for counterparties that are not primary customers of the institution. The layout mirrors the Account Details page, with tabs for reference data, transactional activity, and detection results.

### 3.8 Viewing Party Details

The Party Details page provides a comprehensive view of an individual or entity that holds one or more accounts.

Key tabs include:

- **Header Pane** – Key party identifiers and risk summary
- **All Tab** – Consolidated view
- **Reference Data Tab** – Static party attributes (e.g., nationality, occupation, risk code, related accounts)
- **Transactional Activity Tab** – Aggregated transaction statistics across all associated accounts
- **Detection Results Tab** – Detection rule occurrences linked to the party

### 3.9 Viewing Organization / Country Details

For deployments that monitor activity at the organizational or country level, the Organization/Country Details page displays aggregated data across all entities within that organizational unit or geographic scope.

Key tabs include reference data, transactional activity, and detection results, structured similarly to account and party views.

### 3.10 Creating a Manual Alert

Authorized users create manual alerts directly from the entity details page. This is useful when an analyst identifies suspicious activity that automated rules did not detect.

To create a manual alert:

1. Open the entity's details page (Account, Party, or Organization).
2. Click **Create Manual Alert** in the toolbar.
3. Select the alert type from the dropdown.
4. Enter a description and any relevant details.
5. Click **Submit** to create the alert.

Manual alerts created via API follow the same workflow and appear in the Work Items list alongside system-generated alerts. See the API Reference Guide for details on the manual alert creation endpoint.

---

## 4. Alert Work Item Details

### 4.1 Navigating Alert Details

The Alert Details page provides a full investigation workspace for a single alert. It is accessed by clicking an alert row in the Work Items list.

#### 4.1.1 Accessing Alert Details

Click any alert row in the Work Items list to open the Alert Details page. Use the browser back button or the breadcrumb navigation to return to the list.

#### 4.1.2 Alert Details Navigation Bar

The navigation bar at the top of the Alert Details page displays the alert ID, entity name, alert type, and current workflow step. Navigation arrows allow you to move to the previous or next alert without returning to the list.

#### 4.1.3 Changing the Header Display

To customize which fields appear in the alert header, click the **Configure Header** icon to select or reorder the displayed fields.

#### 4.1.4 Investigation Tab

The Investigation tab is the primary workspace for the analyst. It displays the detection evidence, entity relationships, transaction details, and analyst notes in a unified view.

#### 4.1.5 Relations Display

The Relations display shows a graphical or tabular view of the entity's relationships, including linked accounts, related parties, and counterparties involved in flagged transactions.

#### 4.1.6 Activities Display

The Activities display shows the specific transactions or events that contributed to the alert. Each activity row includes transaction type, amount, date, counterparty, and the rule occurrence it contributes to.

Rule-level tagging allows analysts to mark individual activities as relevant or irrelevant to the investigation, supporting more accurate SAR narrative generation.

#### 4.1.7 Details Display

The Details display shows structured data fields associated with the alert, including model information, calculated values, and threshold breach details.

#### 4.1.8 VASP Details Display

For alerts involving Virtual Asset Service Providers, the VASP Details display shows blockchain-relevant information such as wallet addresses, exchange identifiers, and associated risk indicators.

#### 4.1.9 Predictive Score View

The Predictive Score view shows the output of any machine learning models applied to the entity. It presents the overall predicted risk score, the top contributing features, and a comparison to the population baseline.

#### 4.1.10 Transaction Lookback Tab

The Transaction Lookback tab provides a historical view of the entity's transactions extending beyond the current detection period. Analysts can use this to assess whether the suspicious activity is isolated or part of a longer pattern.

#### 4.1.11 Party Card Tab

The Party Card displays a consolidated profile of the primary party associated with the alert.

- **Party Details Tab** – Core demographic and risk attributes of the party
- **Accounts Tab** – List of all accounts associated with the party
- **Related Parties Tab** – Other parties linked to this party through shared accounts or relationships

#### 4.1.12 Party Snapshot

The Party Snapshot provides a one-page summary of the party's key attributes and recent activity, suitable for quick review during triage.

#### 4.1.13 Party Activity Dashboard

The Party Activity Dashboard displays visual charts summarizing the party's transaction volumes, value trends, and alert history over configurable time periods.

#### 4.1.14 SurveilX Account Search

The SurveilX Account Search panel (if enabled) allows analysts to search for account information in connected external systems without leaving the alert details page.

#### 4.1.15 DataIQ

The DataIQ panel (if enabled) provides enriched entity data sourced from external data providers, including public records, adverse media, and sanctions data.

#### 4.1.16 Open Analytics

Use the Open Analytics panel to run on-demand analytical queries directly from the alert context, using pre-configured or custom query templates.

### 4.2 Navigating Alert Details – Tabular View

Some organizations configure the Alert Details page to display in a tabular layout instead of the default card-based layout. In tabular mode, structured tables display the same information.

Key features of the tabular view:

- **Option to Collapse Alert Details** – Collapse the header section to maximize the available space for detail tabs.
- **Account and Entity Hyperlinks** – Entity names in the detail tables are hyperlinked to their respective detail pages.
- **Alert Header** – Displays key alert identifiers and status at the top of the page.
- **Open Analytics Rule Display** – Shows the detection rule logic in a readable format for rules built using the Open Analytics framework.

### 4.3 Alert Types

Compliance Monitor generates alerts for multiple entity types. The alert type determines which detail tabs are available and how the header is structured.

| Alert Type | Description |
|---|---|
| **Account Activity** | Triggered based on transaction patterns at the account level |
| **Party Activity** | Triggered based on aggregated activity across all accounts for a party |
| **Organization/Country Activity** | Triggered based on activity at the organizational or geographic level |
| **Party Group Activity** | Triggered based on aggregated activity across a defined group of related parties |
| **Logical Entity Activity** | Triggered for entities that span multiple account structures |
| **Manual Party Alert** | Manually created by an analyst for a specific party |
| **Hidden Links Alert** | Triggered when hidden relationships between entities are detected |
| **False Negative Alert** | Triggered by the system to flag cases where detection may have been missed |

### 4.4 Alert Tabs

The following tabs are available on the Alert Details page. Tab availability varies by alert type.

#### 4.4.1 Alert Details Tab

The Alert Details tab displays the structured detection evidence for the alert.

- **Model Information Section** – Name and description of the detection model that generated the alert
- **Threshold Information Section** – The threshold values that were breached, including the configured limit and the actual value observed
- **Calculated Information Section** – Intermediate values calculated during the detection process
- **Detection Occurrences Pane** – A list of all individual rule or model occurrences that contributed to the alert score
- **Rule Related Drills** – Links to pre-configured drill-down queries for further investigation of specific rule occurrences
- **Custom Drill-Down Links** – Organization-specific links to external systems or reports
- **Prior/Related Alerts** – Lists previous alerts for the same entity and any alerts that share related entities

#### 4.4.2 Related Entities Tab

The Related Entities tab displays entities that are connected to the primary alert entity through transactions, shared accounts, or defined relationships. Each related entity is listed with its type, name, relationship type, and a summary of shared activity.

#### 4.4.3 Activity Profile Tab

The Activity Profile tab displays aggregated statistics for the entity's activity across multiple time periods and transaction categories. This provides context for the current alert by showing how current behavior compares to historical norms.

#### 4.4.4 Security Blanket Details Tab

The Security Blanket Details tab is available for alerts generated by security blanket rules, which detect patterns across a defined time window.

Sub-sections include:

- **Events** – Individual events within the detection window
- **Additional Information** – Supplementary data fields relevant to the alert
- **Monthly Activity** – Month-by-month breakdown of activity within the window
- **Transaction Message Details** – Individual transaction-level details for the events

#### 4.4.5 Transactional Search Tab

The Transactional Search tab provides a configurable search interface for querying transactions associated with the alert entity.

- **Transactional Search Filter** – Set date ranges, transaction types, amount ranges, and counterparty filters
- **Activity Graph** – Visual chart of transaction volumes and values over the filtered period
- **Transactional Search Results** – Tabular list of matching transactions

#### 4.4.6 Account Balance Tab

The Account Balance tab displays the account's balance history over a configurable time period, enabling analysts to correlate balance changes with suspicious transaction activity.

#### 4.4.7 Evidence Gathering Tab

The Evidence Gathering tab allows analysts to collect and organize specific transactions and data points as evidence for a regulatory filing.

To add an item to the evidence collection, select the transaction or data row and click **Add to Evidence**. To remove an item, select it in the evidence list and click **Remove from Evidence**.

---

## 5. Managing Cases

### 5.1 Introduction to Cases

Cases are investigation containers that group one or more related alerts together for joint review and regulatory reporting. A case is typically created when an analyst determines that multiple alerts represent a single pattern of suspicious activity that warrants a unified investigation.

### 5.2 Case Views

The Cases module provides predefined views similar to those in the Work Items module:

| View | Description |
|---|---|
| **My Cases** | Cases assigned to the logged-in user |
| **My Group's Cases** | Cases assigned to any user in the analyst's group |
| **All Open Cases** | All cases currently in an open status |
| **Closed Cases** | Cases that have been closed |
| **High Priority** | Cases with priority above a configurable threshold |

### 5.3 Cases List

The Cases list displays case records matching the current view and filters. Key columns include Case ID, Case Name, Type, Status, Step, Priority, Assigned To, Created Date, and Number of Linked Alerts.

### 5.4 Cases Toolbar

The Cases toolbar provides action buttons for managing cases. Most actions mirror those in the Work Items toolbar.

| Action | Description |
|---|---|
| **Change Step** | Move selected cases to a different workflow step |
| **Assign** | Reassign selected cases to a different user or group |
| **Create Form** | Create a regulatory form linked to selected cases |
| **New Case** | Create a new blank case |
| **Edit Case** | Modify case attributes such as name, type, and priority |
| **Add/View Notes** | Add or view text notes on selected cases |
| **Print List/Details** | Print the list view or case details |
| **Export** | Export list or case details to CSV or Excel |
| **Send Mail** | Send an email notification about the case |
| **Change Priority** | Override the system-assigned priority with a manual value |
| **View History** | View the full audit trail for the case |
| **Delete** | Permanently delete the case (admin only) |

### 5.5 Case Details

The Case Details page provides the full investigation workspace for a single case.

#### 5.5.1 Navigation Options

The Case Details navigation bar displays the case ID, name, type, and current step. Navigation arrows allow movement to the previous or next case without returning to the list.

#### 5.5.2 General Tab

The General tab displays core case attributes including case name, type, status, priority, assigned user, created date, and description.

#### 5.5.3 Case Contents Tab

The Case Contents tab lists all work items (alerts) linked to the case. Analysts can view the details of any linked alert by clicking its row, and can remove alerts from the case if they are no longer relevant to the investigation.

Additional case content sections may include:

- **Parties** – Parties identified as subjects of the investigation
- **Accounts** – Accounts associated with the investigation
- **Transactions** – Key transactions identified as evidence
- **Relationships** – Connections between entities within the case

#### 5.5.4 Forms Tab

The Forms tab lists all regulatory forms that have been created and linked to this case. From this tab, analysts can open a form to review or edit its content before submission.

#### 5.5.5 History Tab

The History tab displays the chronological audit trail for the case, including all step transitions, assignments, priority changes, and user actions with timestamps.

---

## 6. Reviewing Outgoing Forms

### 6.1 About Regulatory Forms

Regulatory forms are structured documents submitted to government authorities to report suspicious activity or meet other compliance obligations. Compliance Monitor supports the creation and management of regulatory reporting forms as part of the investigation workflow.

The types of forms available depend on your organization's configuration and jurisdiction. Common form types include Suspicious Activity Reports (SARs) and other jurisdiction-specific regulatory filings.

### 6.2 Creating Regulatory Forms

Regulatory forms can be created in two ways:

1. **From the Cases toolbar**: Select one or more cases and click **Create Form**. The system pre-populates the form with entity and transaction data from the linked case.
2. **From the Forms module**: Open the Forms module and click **New Form** to create a form independently of a case.

After creation, forms follow a review and approval workflow before submission.

### 6.3 Form Views

The Forms module provides predefined views for managing forms:

| View | Description |
|---|---|
| **My Forms** | Forms assigned to the current user |
| **My Group's Forms** | Forms assigned to users in the current user's group |
| **All Open Forms** | All forms in an open or in-progress status |
| **Submitted Forms** | Forms that have been submitted to the relevant authority |

### 6.4 Outgoing Forms List

The Outgoing Forms list displays form records matching the current view and filter settings. Key columns include Form ID, Form Type, Subject Entity, Status, Step, Assigned To, and Due Date.

### 6.5 Browsing Options

Use the browsing options in the View Bar to filter forms by date range, status, form type, and assigned user. Pagination controls at the bottom of the list allow navigation through large form queues.

### 6.6 Advanced Sort

Use **Advanced Sort** to apply multi-level sorting to the forms list, similar to the Work Items list.

### 6.7 Advanced Filter

Advanced Filter provides additional filter criteria beyond the standard View Bar options, including form sub-type, jurisdiction, and regulatory deadline.

### 6.8 Outgoing Forms Actions

The Forms toolbar provides the following actions:

| Action | Description |
|---|---|
| **Open Form** | Open the selected form for review or editing |
| **Change Step** | Move the form to the next workflow step |
| **Assign** | Reassign the form to a different user |
| **Add Note** | Add a note to the form |
| **Submit** | Mark the form as submitted (for authorized users) |
| **Void** | Void a form that is no longer required |
| **Export** | Export form data to a supported file format |
| **Print** | Print the form in a standard format |

---

---

## Part III – Research & Analysis

---

## 7. Detection and Research Tool & Peer Group Activity Reports

### 7.1 Overview of the DART Investigation Module

The Detection and Research Tool (DART) is an on-demand investigation workspace that allows analysts and investigators to query transaction and entity data outside the standard alert workflow. DART is useful for active investigation, pattern analysis, and preparation of regulatory filings.

### 7.2 DART Views and Data Sources

DART is organized by data source, which corresponds to a specific type of entity or aggregation level. Available data sources include:

| Data Source | Description |
|---|---|
| **All Organizations** | Aggregated data across all organizational units |
| **Single Organization** | Data scoped to a specific organizational unit |
| **Predictive Scoring** | Entities scored by machine learning models |
| **Messages Report** | Individual transaction message data |
| **Triggered Rules per Entity** | Summary of which rules triggered for each entity |
| **Alert Rule Distribution** | Distribution of alerts across rule types |
| **Rules to Alert to Case to Form** | Traceability from rule occurrences to regulatory filings |
| **Issue Transactions** | Transactions linked to open alerts |
| **Evidence Gathering Transactions** | Transactions collected as evidence in cases |
| **Rule Monitoring Monthly** | Monthly rule performance statistics |
| **Logical Entities Audit** | Audit data for logical entity definitions |

### 7.3 Setting Up Queries

Configure DART queries by selecting a data source, applying filter criteria, and choosing the columns to display.

#### 7.3.1 Creating, Saving, and Running Queries

To create a query:

1. Select a data source from the left navigation panel.
2. In the filter panel, add one or more filter conditions.
3. Select the columns to include in the results.
4. Click **Run Query** to execute.

To save a query for future use, click **Save Query**, enter a name for the query, and choose whether to make it private or shared with your group.

To run a previously saved query, select it from the **Saved Queries** list and click **Run**.

### 7.4 Managing Saved Queries

The Saved Queries panel lists all queries saved by the current user and shared queries accessible to the user's group.

Actions available on saved queries include:

- **Edit** – Modify the query criteria or column selection
- **Rename** – Change the query name
- **Delete** – Remove the saved query
- **Share/Unshare** – Change the query's visibility to other users in your group

### 7.5 Using Query Results Options

After a query runs, the DART results panel displays the results with the following options:

#### 7.5.1 Configuring Displayed Columns

Click the **Columns** button to add, remove, or reorder columns in the results table.

#### 7.5.2 Sorting the Display

Click any column header to sort results by that column. Hold Shift and click a second column header to apply a secondary sort.

#### 7.5.3 Exporting Query Results

Click **Export** to download the query results as a CSV or Excel file. Large result sets may be exported asynchronously; a notification will be sent when the export file is ready for download.

### 7.6 Peer Group Activity Reports

Peer Group Activity Reports allow analysts to compare the transaction behavior of an entity against a peer group — a set of entities with similar characteristics such as account type, industry sector, or geographic region.

These reports are useful for contextualizing alerts: an entity's activity may appear high in absolute terms but be within normal range for its peer group, or conversely, it may be unusually low compared to peers despite not triggering standard thresholds.

Reports can be filtered by time period, peer group definition, and entity attributes. Results appear as tabular data and comparative charts. Peer Group reports are accessible from the **Reports** section within the DART module.

---

## 8. Visual Analytics Tuning

### 8.1 Overview

The Visual Analytics Tuning module (also referred to as AVA Tuning Insights) provides a graphical dashboard for analyzing detection rule performance and optimizing threshold and score factor configurations. It is designed to support data-driven tuning decisions by presenting rule effectiveness metrics in visual formats.

### 8.2 AVA Tuning Insight Dashboard

The main dashboard provides a high-level view of rule performance across all active rules, including alert volumes, alert quality indicators, and score distribution statistics.

### 8.3 Rule Effectiveness

The Rule Effectiveness dashboards measure how well each detection rule identifies true positive cases relative to the overall alert volume it generates.

#### 8.3.1 Rule Occurrence Effectiveness

This view displays effectiveness metrics for each rule occurrence, showing the proportion of alerts that resulted in regulatory filings or meaningful escalations.

**Optimize Investigations** provides recommendations for threshold adjustments that would most improve the effectiveness ratio for selected rules.

#### 8.3.2 Rule Occurrence Distribution

The Distribution chart shows how rule occurrences are distributed across a range of occurrence counts, helping analysts identify rules that fire too frequently or too rarely.

### 8.4 Score Analysis Dashboard

The Score Analysis dashboard allows analysts to understand how scores are distributed and how score factors contribute to overall entity risk scores.

- **Score Analysis Filter Options** – Filter by rule type, date range, and population group
- **Rule Occurrence Scores** – Distribution of scores assigned to rule occurrences
- **Score Factor Scores** – Distribution of scores contributed by individual score factors
- **Optimize Rule Configuration** – Recommendations for score factor adjustments to improve alert quality

### 8.5 Rule Details Dashboard

The Rule Details dashboard provides detailed information about a specific rule's behavior.

- **Rule Details** – Configuration summary, trigger statistics, and historical performance
- **Accessing Variables** – View the variables used in the rule's definition and their observed value distributions
- **Accessing Score Factors** – View the score factors referenced by the rule and their contribution distributions

### 8.6 Threshold Analysis Dashboards

Threshold Analysis dashboards visualize the distribution of observed values relative to configured thresholds, allowing analysts to identify whether thresholds are positioned optimally.

Available threshold analysis views:

| Dashboard Type | Description |
|---|---|
| **Numerical Threshold Analysis** | Histograms of numerical variable values relative to thresholds; shows entities near or beyond the threshold |
| **Date Threshold Analysis** | Distribution of date-based variables relative to date thresholds |
| **String Threshold Analysis** | Frequency distribution of string variable values |

### 8.7 Score Factor Analysis Dashboards

Score Factor Analysis dashboards complement the threshold analysis by showing how score factors contribute to the total risk score distribution.

Available score factor analysis views:

| Dashboard Type | Description |
|---|---|
| **Numerical Score Factor Analysis** | Score factor contribution and distribution for numerical factors |
| **Date Score Factor Analysis** | Score factor contribution and distribution for date-based factors |
| **String Score Factor Analysis** | Score factor contribution and distribution for categorical/string factors |

Each score factor dashboard includes:
- A score factor distribution chart
- A score factor contribution chart showing relative impact on total scores
- A score-by-score breakdown for detailed analysis

---

## 9. Solution Insights

### 9.1 About Solution Insights

Solution Insights is an analytics layer that provides compliance operations teams with aggregated performance metrics and trend analysis across the full alert-to-filing workflow. It complements the investigation and tuning features of Compliance Monitor by giving operations managers visibility into team performance, alert queue health, and regulatory filing trends.

Key report categories include:

- **Alert Volume Trends** – Track alert generation volumes over time, segmented by alert type and organizational unit
- **Alert Queue Health** – Monitor the age and backlog of open alerts and cases
- **Investigation Efficiency** – Measure average investigation time, step durations, and closure rates by team and analyst
- **Regulatory Filing Metrics** – Track form creation, approval, and submission timelines
- **Rule Performance Summary** – High-level view of which rules are generating the most alerts and the highest quality escalations

### 9.2 Accessing Insights

Navigate to **Reports > Solution Insights** to access the insights dashboard. Select the desired report category from the left panel and configure the date range and organizational scope filters.

Insights reports can be exported to PDF or Excel for use in management reporting and regulatory audit responses.

---

---

## Part IV – Configuration

---

## 10. Adjusting Thresholds and Scoring

### 10.1 Introduction to Adjusting Thresholds and Scoring

The Settings module allows authorized users to configure the detection parameters that control how alerts are generated. This includes setting threshold values for individual detection rules, configuring scoring scales, and managing security blanket parameters.

Changes to thresholds and scoring affect alert generation in the next detection cycle. All changes are audited.

### 10.2 About Detection Logic

Compliance Monitor uses a layered detection approach:

1. **Filter conditions** – Pre-filter entities to focus detection on relevant populations
2. **Threshold evaluation** – Compare observed values to configured thresholds to identify breaches
3. **Scoring** – Assign a risk score contribution for each rule breach based on configurable score scales
4. **Alert consolidation** – Aggregate rule occurrences into a single alert for the entity per detection period

### 10.3 Setting Up Alert Type Parameters

Alert type parameters control high-level behaviors for groups of related detection rules. To access alert type parameters:

1. Navigate to **Settings > Alert Type Parameters**.
2. Select the alert type from the list.
3. Modify the desired parameters.
4. Click **Save**.

About Alert Type Parameters: Each alert type has a set of configurable parameters that affect all rules within that type, such as the minimum score required to generate an alert, the maximum number of concurrent alerts per entity, and the retention period for closed alerts.

Assigning Alert Type Parameters to specific organizational units allows different branches or regions to use different parameter sets for the same alert type.

### 10.4 Configuring Detection Rules

Configure detection rules in the Settings module under **Detection Rules**.

#### 10.4.1 Setting Rules to Active/Inactive

To activate or deactivate a detection rule, open the Detection Rules list, select the rule, and toggle its **Active** status. Inactive rules are not evaluated during the detection cycle.

#### 10.4.2 Setting Up Thresholds

Thresholds define the values at which a rule triggers. For each rule, configure:

- **Individual Thresholds** – Applied at the entity level; each entity may have a different threshold based on its attributes
- **Population Thresholds** – Applied uniformly across a population group
- **User-Defined Values** – Custom threshold values set by authorized users for specific entities
- **Tenant User-Defined Values** – Custom threshold values set at the tenant (organizational unit) level

To modify a threshold:

1. Navigate to **Settings > Detection Rules**.
2. Select the rule and click **Thresholds**.
3. Locate the threshold parameter to modify.
4. Enter the new value and click **Save**.

#### 10.4.3 Setting Up Scoring

Scoring determines how much each rule occurrence contributes to an entity's total risk score. Configure score scales at the individual or population level.

Score scale types include:

- **User Score Scales** – Custom score assignments set by individual users
- **Tenant User Score Scales** – Custom score assignments set at the tenant level
- **Population Scoring** – Score values applied to all entities in a population group
- **Individual Scoring** – Score values applied to specific entities

#### 10.4.4 Security Blanket Configuration

Security Blanket rules monitor accumulating behavior over a rolling time window. Configuration options include:

- **Account-Level Security Blanket** – Parameters controlling how account-level security blanket rules evaluate and score activity
- **Party-Level Security Blanket** – Parameters for party-level monitoring
- **Organization/Country-Level Security Blanket** – Parameters for organizational-level monitoring

For each security blanket type, administrators can configure the observation window, the reset behavior, and the scoring parameters.

---

## 11. Tuning Rule Settings

### 11.1 Overview of the Tuning Feature

The Tuning module allows authorized users to test proposed threshold or scoring changes against historical data before applying them to production. This reduces the risk of misconfiguration and allows the compliance team to predict the impact of changes on alert volumes and quality.

### 11.2 Accessing the Tuning Feature

Navigate to **Settings > Tuning** to access the tuning workspace. The main screen displays a list of rules available for tuning, organized by alert type.

#### 11.2.1 Tuning Test Values

Each rule displays its current production threshold and scoring values alongside configurable test value fields. Enter proposed values in the test fields to create a test scenario.

### 11.3 Navigating the Tuning Feature

#### 11.3.1 Test Values Tuning Tree

The Tuning Tree displays the hierarchy of alert types and rules, allowing you to navigate to specific rules and configure test values. Rules with pending test values are highlighted for visibility.

#### 11.3.2 Items List Pane

The Items List Pane shows the entities that would be affected by the current test configuration. Each row represents an entity, with columns showing the current production behavior and the projected behavior under the test values.

### 11.4 Entering and Modifying Test Values

To enter test values:

1. Select a rule in the Tuning Tree.
2. Enter new threshold and/or scoring values in the test fields.
3. Repeat for any additional rules you want to include in the test scenario.

Multiple rules can be tested simultaneously within a single test run.

### 11.5 Running a Test

Click **Run Test** to execute the test scenario against the configured historical data period. The system evaluates all entities using the test values and generates projected results. Test runs may take several minutes depending on data volume.

### 11.6 Viewing Test Results

After the test run completes, the Results tabs display the following:

#### 11.6.1 Summary

The Summary tab shows the overall impact of the test values: the number of entities added, removed, or unaffected compared to the current production configuration, and the projected change in total alert volume.

#### 11.6.2 Alerts by Population Group

This tab breaks down the projected alert volume changes by population group, helping analysts understand whether the impact is concentrated in a specific segment.

**Apply to Test Top N Alerts**: Use this option to apply test values to only the top-scoring entities within a population, for incremental tuning.

#### 11.6.3 Issue Comparison

The Issue Comparison tab shows a side-by-side comparison of alerts generated under the current production values versus the test values, allowing analysts to identify which specific entities would be gained or lost.

#### 11.6.4 Test Values in Current Test

This tab summarizes all the test values configured for the current test run, providing a consolidated view for documentation purposes.

#### 11.6.5 Issue Comparison for Export

This tab formats the issue comparison data for export to a spreadsheet.

#### 11.6.6 Exporting Test Results

Click **Export** to download the full test results, including the summary, population breakdown, and issue comparison, to an Excel file.

### 11.7 Applying Values for Production

After reviewing test results and confirming that the changes are appropriate, apply the test values to the production configuration.

#### 11.7.1 Applying All Test Items of a Rule

Select the rule in the Tuning Tree and click **Apply All** to apply all test values for that rule to production.

#### 11.7.2 Applying Individual Test Items

Select specific entities or population groups in the Items List Pane and click **Apply Selected** to apply test values only for those selected items.

All production changes made through the Tuning module are recorded in the audit trail.

---

## 12. Maintaining Lists

### 12.1 Introduction to Maintaining Lists

The Lists module allows authorized users to maintain reference data that detection rules reference during the detection cycle. Changes to lists take effect in the next detection run.

### 12.2 About FIU / Financial Intelligence Lists

Financial Intelligence Lists contain entities of interest identified by internal or external sources, such as government watchlists, high-risk counterparty lists, or internal risk classifications.

#### External Reports

External Reports allow integration of third-party watchlist data into the detection framework. Configure these reports to update on a scheduled basis.

### 12.3 Manual Relations

The Manual Relations list allows users to define explicit relationships between entities that are not captured in the standard data. For example, two parties that are known associates but are not linked through shared accounts can be connected via a manual relation.

Manual relations affect how the related entities section renders and may influence detection rule results in the following cycle.

### 12.4 Maintaining Rule-Related Lists

Rule-Related Lists are reference lists directly referenced by one or more detection rules. Each list has a type that determines how values are stored and matched.

#### Accessing Rule-Related Lists

Navigate to **Lists > Rule-Related Lists** and select the desired list from the table.

#### List Types and Management

| List Type | Description | How to Add Members |
|---|---|---|
| **Single Value List** | Contains a set of individual values | Enter each value in the add member form |
| **Pair Value List** | Contains pairs of related values | Enter both values in the add member form |
| **Value Pair Range List** | Contains value pairs representing ranges | Enter the lower and upper bound for each range |
| **Party Group List** | Contains a group of related parties | Add parties by ID or search |
| **User Population List** | Applies at the population level | Specify population criteria |
| **User Individual List** | Applies to specific individual entities | Add entity IDs directly |
| **Group White List** | Excludes entity groups from specific rules | Add groups or entities to the exclusion list |

#### Risk Level Lists

Risk Level Lists assign categorical risk classifications to entities based on configurable criteria. Analysts can maintain these lists to reflect updated risk assessments.

Pair value variants of risk level lists allow risk assignments based on combinations of two attributes, such as country and transaction type.

---

## 13. Policy Manager

### 13.1 Introduction to the Policy Manager

The Policy Manager is an advanced configuration module that allows authorized users to create, test, activate, and manage custom detection rules. Rules created in the Policy Manager follow the same detection framework as system-provided rules and can reference standard data sources and entity attributes.

### 13.2 Selecting a Policy Type

Before creating or reviewing rules, select the policy type from the dropdown at the top of the Policy Manager page. Policy types correspond to the categories of detection logic, such as Account Activity, Party Activity, or Organization/Country Activity.

### 13.3 Navigating the Policy Manager

The Policy Manager is organized into four tabs:

#### 13.3.1 Draft Policy Tab

The Draft Policy tab displays rules that have been created but not yet activated. From this tab, create, edit, validate, and prepare rules for activation.

**Draft Policy Toolbar** includes buttons for creating new rules, editing existing draft rules, validating rules, and submitting rules for activation.

**More Actions** provides additional options including cloning an existing rule as a draft, deleting draft rules, and viewing rule history.

**Draft Policy Table** lists all draft rules with their name, type, creation date, and validation status.

#### 13.3.2 Policy Activation Tab

The Policy Activation tab displays rules that have been submitted for activation and are awaiting approval. Authorized users approve or reject rules from this tab.

#### 13.3.3 Active Policy Tab

The Active Policy tab displays all currently active rules. From this tab, authorized users deactivate rules or create new draft versions of existing rules.

#### 13.3.4 Historical Policies Tab

The Historical Policies tab displays past versions of rules that have been superseded by newer versions or deactivated. Historical rules can be viewed for audit purposes but cannot be re-activated directly.

### 13.4 Creating a New Rule

To create a new rule:

1. On the Draft Policy tab, click **New Rule**.
2. Enter a rule name and description.
3. Select the rule type (Account, Party, or Organization/Country).
4. Define the filter conditions that determine which entities the rule applies to.
5. Define the rule logic (conditions and definitions).
6. Validate the rule.
7. Save the rule as a draft.

#### 13.4.1 Adding Conditions

Conditions are filter criteria that determine whether the rule applies to a given entity. Conditions reference entity attributes and may use comparison operators such as equals, greater than, contains, or is in list.

**Account-Level Conditions** reference account attributes such as account type, region, currency, or risk code.

**Party-Level Conditions** reference party attributes such as occupation, nationality, or risk classification.

#### 13.4.2 Adding Definitions

Definitions specify what the rule measures and compares against a threshold. Definitions reference aggregated transaction data or entity statistics.

**Account-Level Definitions** reference account transaction aggregates such as monthly debit volume or daily credit value.

**Party-Level Definitions** reference party-level transaction aggregates.

**Daily/Monthly Query Templates** provide pre-built definition structures that can be customized with specific threshold values.

#### 13.4.3 Validating a Rule

Click **Validate** to check the rule for syntax errors and logical consistency before saving. The validation output displays any errors or warnings that must be resolved.

#### 13.4.4 Saving a Rule

Click **Save** to save the rule as a draft. Saved draft rules appear in the Draft Policy table and can be edited further before activation.

### 13.5 Activating and Deactivating Rules

#### 13.5.1 Host Recommendation of Rules

The system may provide recommendations for activating or deactivating rules based on rule performance data. Recommendations appear in the Policy Activation tab for review.

#### 13.5.2 Policy Activation Tab – Activating a Rule

To activate a draft rule:

1. Open the Policy Activation tab.
2. Select the rule to activate.
3. Review the rule definition and any system recommendations.
4. Click **Activate** to move the rule to the Active Policy tab.

The rule will be included in the next detection cycle after activation.

### 13.6 Managing Rules

The Active Policy tab provides management actions for active rules:

| Action | Description |
|---|---|
| **Deactivate** | Remove the rule from the next detection cycle |
| **New Version** | Create a draft copy of the rule for modification |
| **View History** | See all versions and activation/deactivation events for the rule |
| **View Usage** | See which entities are currently triggering the rule |

### 13.7 Guidelines for Using the Expression Builder

Use the Expression Builder to construct condition and definition expressions in the Policy Manager.

#### 13.7.1 Available Context

The Expression Builder provides access to the following data contexts:

- **Account Fields** – Attributes of the account being evaluated
- **Party Fields** – Attributes of the primary party associated with the account
- **Calculated Fields** – Intermediate values computed during the detection run, such as transaction aggregates

#### 13.7.2 The Expression Builder Tools

- **Toolbar** – Provides buttons for adding operators, functions, and field references
- **Entering an Expression** – Type or use the toolbar to construct a logical expression. The builder validates expressions in real-time and highlights syntax errors.

### 13.8 Custom Transaction Rules

Custom Transaction Rules allow organizations to define detection logic that operates at the individual transaction level, instead of on aggregated statistics. These rules are useful for detecting specific transaction patterns, amounts, or counterparty combinations that standard aggregation-based rules may not capture.

---

## 14. Processed Transactions Log

### 14.1 About the Processed Transactions Log

The Processed Transactions Log provides a searchable record of all transactions that were processed by the detection engine during a specified cycle. This log is useful for:

- Confirming that expected transactions were ingested and processed
- Identifying transactions that were excluded or flagged during processing
- Supporting audit and compliance inquiries about data completeness

The log can be filtered by date range, entity, transaction type, and processing status. Results can be exported for external review.

---

---

## Part V – Administration

---

## 15. Managing Users, Groups, and Roles

### 15.1 Introduction to User Management

The User Management module allows system administrators to manage the users, groups, and roles that control access to Compliance Monitor. Proper configuration of users, groups, and roles ensures that analysts see only the alerts and entities they are authorized to work on.

### 15.2 About Role-Based Permissions

Access to Compliance Monitor features and data is controlled by a role-based permission system. Each user is assigned one or more roles, and each role grants specific permissions across the application's modules.

Permissions apply at the module level and include access rights such as view, create, edit, approve, and delete.

### 15.3 Managing Users

To manage users, go to **Administration > Users**.

The Users list displays all user accounts in the system. Key columns include User ID, Full Name, Email, Status (Active/Inactive), Associated Groups, and Assigned Roles.

**User management actions include:**

- **Create User** – Add a new user account and configure credentials, group membership, and role assignments
- **Edit User** – Modify user attributes, reset password, or change role assignments
- **Activate/Deactivate** – Enable or disable a user account without deleting it
- **View Activity** – Review the audit log of actions performed by the user

### 15.4 Manage Users Activity Bar

The Activity Bar for user management provides quick access to recent user actions, pending user requests, and user account status at a glance.

### 15.5 Managing Groups

Groups are collections of users that share common work queues and access scopes. Assigning users to groups controls which alerts and cases appear in their "My Group's Items" views.

To manage groups, go to **Administration > Groups**.

**Group management actions include:**

- **Create Group** – Define a new group with a name and associated organizational scope
- **Edit Group** – Modify group membership or attributes
- **Delete Group** – Remove a group (users are not deleted, but their group membership is removed)

### 15.6 Manage Groups Activity Bar

The Groups Activity Bar provides a summary of group sizes, pending group membership requests, and cross-group alert assignments.

### 15.7 Managing Roles

Roles define the set of permissions granted to users. A user may have multiple roles, and permissions are cumulative across all assigned roles.

To manage roles, go to **Administration > Roles**.

#### 15.7.1 Modules Tab

The Modules tab configures which application modules the role can access. For each module, set the permission level (None, View, Edit, Manage).

#### 15.7.2 Work Items Tab

The Work Items tab configures permissions specific to the Work Items module, such as the ability to change step, reassign, create cases, or delete alerts.

#### 15.7.3 Cases Tab

The Cases tab configures permissions for the Cases module, including creating, editing, closing, and deleting cases, and creating regulatory forms.

#### 15.7.4 Settings Tab

The Settings tab configures permissions for the Settings module, including the ability to modify thresholds, scoring, and detection rule parameters.

#### 15.7.5 Forms Tab

The Forms tab configures permissions for the Forms module, including creating, editing, approving, submitting, and voiding regulatory forms.

#### 15.7.6 High Focus Tab

The High Focus tab configures access to entities or alert types designated as high-priority or sensitive, which may require elevated permissions.

#### 15.7.7 Admin Tab

The Admin tab configures administrative permissions such as user management, role management, and system configuration access.

#### 15.7.8 Other GUI Items Tab

The Other GUI Items tab configures access to miscellaneous interface elements that are not covered by the other tabs, such as specific toolbar buttons or display options.

---

## Appendix A – Navigation Reference

### A.1 Navigating the Threshold and Detection Views

The Threshold and Detection Views provide structured access to the full set of detection parameters configured in the system. Compliance administrators performing periodic rule reviews primarily use these views.

#### A.1.1 Alert Type Parameters View

The Alert Type Parameters view displays all alert types and their associated parameter sets in a tabular format. Use the search and filter tools to locate specific alert types. Click a row to expand the full parameter set for editing.

#### A.1.2 Detection Rules View

The Detection Rules view lists all active and inactive detection rules across all alert types. Columns include rule name, alert type, status, last modified date, and the number of entities currently evaluated by the rule.

Use the column filters to narrow results by alert type or status. Click a rule row to open the rule configuration detail page.

---

## Appendix B – Query Rule Templates Overview

### B.1 About Query Rule Templates

Query Rule Templates are pre-defined query structures that can be used as starting points when creating custom detection rules in the Policy Manager. Each template corresponds to a specific data pattern or entity attribute combination.

### B.2 Entity Types and Associated Templates

Templates are organized by the entity type and data context they query:

| Entity Type | Template Categories |
|---|---|
| **Account** | Classification, credit/balance attributes, daily/monthly transaction values, volumes, and counts by type; event scores; regional and sector codes; risk codes; security blanket parameters |
| **Party** | Demographics, risk attributes, income and net worth, related accounts and countries, daily/monthly transaction aggregates by type; party group aggregates |
| **Counterparty/Correspondent** | Country-level transaction volumes and values; monthly aggregate patterns |
| **Entity-in-Country** | Daily and monthly transaction values and volumes for entities transacting in specific countries; many-to-one relationship patterns |
| **Logical Entity** | Custom entity structures spanning multiple accounts or parties |

### B.3 Using Templates

To use a query template in the Policy Manager:

1. In the Policy Manager, create a new rule or edit a draft rule.
2. In the Definition section, click **Select Template**.
3. Browse or search for the desired template by name or category.
4. Select the template and click **Apply**.
5. Modify the template's default values as needed for your rule.
6. Validate and save the rule.

Templates cannot be modified directly; they serve as read-only starting points. Customizations become part of the rule definition.
