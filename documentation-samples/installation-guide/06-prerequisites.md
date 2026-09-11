---
layout: default
title: Prerequisites and Preparation
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column" style="max-width: 1000px; margin: 0 auto;">
      <div class="subpage-card" style="max-width: 100%;" markdown="1">

# Prerequisites and Preparation

[← Back to Table of Contents](index.html)

---

Before installing the Contoso Platform, confirm that your environment meets the
requirements described in this chapter.

## Supported Operating Systems

| Operating System | Supported Versions |
|---|---|
| Linux | Ubuntu 22.04 LTS, Red Hat Enterprise Linux 8.x / 9.x |
| Windows Server | Windows Server 2019, Windows Server 2022 |

## Supported Databases

| Database | Supported Versions |
|---|---|
| PostgreSQL | 14.x, 15.x |
| Microsoft SQL Server | 2019, 2022 |

## Preinstalled Software

| Software | Minimum Version | Notes |
|---|---|---|
| Java Runtime Environment | 17 | Required on the application server host. |
| Node.js | 18.x | Required only if building the web client from source. |
| Docker | 24.x | Required only for container-based deployments. |

## Hardware Recommendations

| Component | CPU | RAM | Disk |
|---|---|---|---|
| Application Server | 4 cores | 16 GB | 100 GB |
| Database Server | 8 cores | 32 GB | 500 GB (SSD recommended) |
| Message Broker | 2 cores | 8 GB | 50 GB |

## Required Permissions

The account used to run the installer must have:

- Local administrator (Windows) or `sudo` (Linux) privileges on the application server.
- A database account with privileges to create schemas, users, and roles.
- Network access to all target hosts on the ports described in the
  [Solution Architecture](05-solution-architecture.html) chapter.

> **Note:** Contoso recommends creating a dedicated service account for the installer
> rather than reusing a personal administrator account. Do not use real production
> credentials when testing this template — use your organization's standard
> credential-management process.

---

[← Previous: Solution Architecture](05-solution-architecture.html) | [Next: Preparing the Configuration Files →](07-preparing-configuration-files.html)

      </div>
    </main>
  </div>
</section>
