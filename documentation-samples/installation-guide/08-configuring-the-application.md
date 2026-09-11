---
layout: default
title: Configuring the Application
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column" style="max-width: 1000px; margin: 0 auto;">
      <div class="subpage-card" style="max-width: 100%;" markdown="1">

# Configuring the Application

[← Back to Table of Contents](index.html)

---

In the `contoso.conf` file, you configure the core settings used by the application
server and installer. This chapter describes the most commonly used parameters.

## To configure the contoso.conf file:

1. Navigate to the `conf` folder of the installation directory.
2. Open `contoso.conf` and update the parameters described in the following tables.
3. Save the file before running the installer.

## Database Connection Parameters

| Parameter | Description |
|---|---|
| `contoso.db.host` | Host name or IP address of the database server. Example: `db01.example.local` |
| `contoso.db.port` | Port used to connect to the database. Default: `5432` (PostgreSQL) / `1433` (MSSQL). |
| `contoso.db.name` | Name of the application database schema. Default: `contoso_app` |
| `contoso.db.app-user.name` | Application database user name. Example: `contoso_app_user` |
| `contoso.db.app-user.password` | Encrypted password for the application database user. See [Preparing the Configuration Files](07-preparing-configuration-files.html). |

## Application Server Parameters

| Parameter | Description |
|---|---|
| `contoso.server.port` | Port on which the application server listens. Default: `8443` |
| `contoso.server.hostname` | Public hostname used in generated links, for example `contoso.example.local`. |
| `contoso.server.log-level` | Logging verbosity. Possible values: `ERROR`, `WARN`, `INFO`, `DEBUG`. Default: `INFO` |

## Message Broker Parameters

| Parameter | Description |
|---|---|
| `contoso.broker.host` | Host name of the message broker. |
| `contoso.broker.port` | Port used to connect to the message broker. Default: `5672` |
| `contoso.broker.queue-prefix` | Prefix applied to all queue names created by the installer. Default: `contoso.` |

> **Note:** All host names, user names, and example values in this chapter are fictitious
> and provided for illustration only. Replace them with values that match your own
> environment when reusing this template for a real product.

---

[← Previous: Preparing the Configuration Files](07-preparing-configuration-files.html) | [Next: Running the Installer →](09-running-the-installer.html)

      </div>
    </main>
  </div>
</section>
