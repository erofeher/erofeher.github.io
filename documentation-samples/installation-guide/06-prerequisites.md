---
layout: default
title: "Prerequisites and preparation"
---

<section class="hero-stage">
<div class="subpage-shell">
<main class="content-column">
<div class="subpage-card" markdown="1">

# Prerequisites and preparation

[← Back to table of contents](index.html)

---

Before you install the Contoso Platform, confirm that your environment meets the
requirements in this topic.

## Supported operating systems

| Operating system | Supported versions |
|---|---|
| Linux | Ubuntu 22.04 LTS, Red Hat Enterprise Linux 8.x / 9.x |
| Windows Server | Windows Server 2019, Windows Server 2022 |

## Supported databases

| Database | Supported versions |
|---|---|
| PostgreSQL | 14.x, 15.x |
| Microsoft SQL Server | 2019, 2022 |

## Preinstalled software

| Software | Minimum version | Notes |
|---|---|---|
| Java Runtime Environment | 17 | Required on the application server host. |
| Node.js | 18.x | Required only if you build the web client from source. |
| Docker | 24.x | Required only for container-based deployments. |

## Hardware recommendations

| Component | CPU | RAM | Disk |
|---|---|---|---|
| Application server | 4 cores | 16 GB | 100 GB |
| Database server | 8 cores | 32 GB | 500 GB (SSD recommended) |
| Message broker | 2 cores | 8 GB | 50 GB |

## Required permissions

The account you use to run the installer must have:

- Local administrator (Windows) or `sudo` (Linux) privileges on the application server.
- A database account with privileges to create schemas, users, and roles.
- Network access to all target hosts on the ports described in
  [Solution architecture](05-solution-architecture.html).

> **Note:** Contoso recommends creating a dedicated service account for the installer
> instead of reusing a personal administrator account. Don't use real production
> credentials when you test this template. Use your organization's standard
> credential-management process.

---

[← Previous: Solution architecture](05-solution-architecture.html) | [Next: Prepare the configuration files →](07-preparing-configuration-files.html)

</div>
</main>
</div>
</section>
