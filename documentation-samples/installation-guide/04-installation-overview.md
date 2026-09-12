---
layout: default
title: "Installation overview"
---

<section class="hero-stage">
<div class="subpage-shell">
<main class="content-column">
<div class="subpage-card" markdown="1">

# Installation overview

[← Back to table of contents](index.html)

---

The Contoso Platform is a modular enterprise solution made up of several components
that work together to collect, process, and present data to users. This topic
introduces the components and the overall installation process.

## Solution components

| Component | Description |
|---|---|
| Contoso Application Server | Hosts the core business logic and REST API the web client uses. |
| Contoso Database | Stores configuration, transactional, and historical data. Supports either PostgreSQL or Microsoft SQL Server. |
| Contoso Message Broker | Handles asynchronous communication between the application server and background workers. |
| Contoso Web Client | The browser-based user interface for users and administrators. |
| Contoso Admin Console | A command-line and web-based tool for configuring and monitoring the deployment. |

## About the installation process

Installing the Contoso Platform generally involves these stages:

1. **Prepare the environment**: Confirm that all prerequisite software is installed
   and that the target servers meet the minimum hardware requirements. See
   [Prerequisites and preparation](06-prerequisites.html).
2. **Prepare the configuration files**: Edit the installer's configuration files with
   environment-specific values, and encrypt any stored credentials. See
   [Prepare the configuration files](07-preparing-configuration-files.html).
3. **Run the installer**: Run the installer in unattended (CLI) mode to deploy the
   database schema and application components. See
   [Run the installer](09-running-the-installer.html).
4. **Configure the application**: Fine-tune application-level settings using the
   configuration reference tables. See
   [Configure the application](08-configuring-the-application.html).
5. **Verify the installation**: Confirm that all services are running and that the
   application is reachable. See
   [Verify the installation](10-verifying-the-installation.html).

> **Note:** In an upgrade scenario, add a step before step 3 to back up the existing
> database and take a snapshot of the current configuration.

---

[← Previous: About this guide](03-about-this-guide.html) | [Next: Solution architecture →](05-solution-architecture.html)

</div>
</main>
</div>
</section>
