---
layout: default
title: Installation Overview
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column" style="max-width: 1000px; margin: 0 auto;">
      <div class="subpage-card" style="max-width: 100%;" markdown="1">

# Installation Overview

[← Back to Table of Contents](index.html)

---

The **Contoso Platform** is a modular enterprise solution made up of several components
that work together to collect, process, and present data to end users. This chapter
introduces the components and the overall installation process.

## Solution Components

| Component | Description |
|---|---|
| Contoso Application Server | Hosts the core business logic and REST API used by the web client. |
| Contoso Database | Stores configuration, transactional, and historical data. Supports either PostgreSQL or Microsoft SQL Server. |
| Contoso Message Broker | Handles asynchronous communication between the application server and background workers. |
| Contoso Web Client | The browser-based user interface used by end users and administrators. |
| Contoso Admin Console | A command-line and web-based tool used to configure and monitor the deployment. |

## About the Installation Process

Installing the Contoso Platform generally involves the following stages:

1. **Prepare the environment** – confirm that all prerequisite software is installed and
   that the target servers meet the minimum hardware requirements. See
   [Prerequisites and Preparation](06-prerequisites.html).
2. **Prepare the configuration files** – edit the installer's configuration files with
   environment-specific values, and encrypt any stored credentials. See
   [Preparing the Configuration Files](07-preparing-configuration-files.html).
3. **Run the installer** – run the installer in unattended (CLI) mode to deploy the
   database schema and application components. See
   [Running the Installer](09-running-the-installer.html).
4. **Configure the application** – fine-tune application-level settings using the
   configuration reference tables. See
   [Configuring the Application](08-configuring-the-application.html).
5. **Verify the installation** – confirm that all services are running and that the
   application is reachable. See
   [Verifying the Installation](10-verifying-the-installation.html).

> **Note:** In an upgrade scenario, an additional step is usually inserted before step 3
> to back up the existing database and take a snapshot of the current configuration.

---

[← Previous: About This Guide](03-about-this-guide.html) | [Next: Solution Architecture →](05-solution-architecture.html)

</div>
</main>
</div>
</section>
