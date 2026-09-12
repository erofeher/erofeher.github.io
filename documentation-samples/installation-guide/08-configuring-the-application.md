---
layout: default
title: "Configure the application"
---

<section class="hero-stage">
<div class="subpage-shell">
<main class="content-column">
<div class="subpage-card" markdown="1">

# Configure the application

[← Back to table of contents](index.html)

---

In the `contoso.conf` file, you configure the core settings the application server and
installer use. This topic describes the most commonly used parameters.

## Configure the contoso.conf file

1. Go to the `conf` folder of the installation directory.
2. Open `contoso.conf` and update the parameters described in the following tables.
3. Save the file before you run the installer.

## Database connection parameters

| Parameter | Description |
|---|---|
| `contoso.db.host` | Host name or IP address of the database server. Example: `db01.example.local` |
| `contoso.db.port` | Port used to connect to the database. Default: `5432` (PostgreSQL) or `1433` (MSSQL). |
| `contoso.db.name` | Name of the application database schema. Default: `contoso_app` |
| `contoso.db.app-user.name` | Application database user name. Example: `contoso_app_user` |
| `contoso.db.app-user.password` | Encrypted password for the application database user. See [Prepare the configuration files](07-preparing-configuration-files.html). |

## Application server parameters

| Parameter | Description |
|---|---|
| `contoso.server.port` | Port the application server listens on. Default: `8443` |
| `contoso.server.hostname` | Public hostname used in generated links, such as `contoso.example.local`. |
| `contoso.server.log-level` | Logging verbosity. Values: `ERROR`, `WARN`, `INFO`, `DEBUG`. Default: `INFO` |

## Message broker parameters

| Parameter | Description |
|---|---|
| `contoso.broker.host` | Host name of the message broker. |
| `contoso.broker.port` | Port used to connect to the message broker. Default: `5672` |
| `contoso.broker.queue-prefix` | Prefix applied to all queue names the installer creates. Default: `contoso.` |

> **Note:** All host names, user names, and example values in this topic are
> fictitious. Replace them with values that match your environment when you reuse
> this template for a real product.

---

[← Previous: Prepare the configuration files](07-preparing-configuration-files.html) | [Next: Run the installer →](09-running-the-installer.html)

---

[← Previous: Preparing the Configuration Files](07-preparing-configuration-files.html) | [Next: Running the Installer →](09-running-the-installer.html)

</div>
</main>
</div>
</section>
