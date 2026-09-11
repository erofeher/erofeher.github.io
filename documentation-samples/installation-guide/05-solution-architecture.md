---
layout: default
title: Solution Architecture
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column" style="max-width: 1000px; margin: 0 auto;">
      <div class="subpage-card" style="max-width: 100%;" markdown="1">

# Solution Architecture

[← Back to Table of Contents](index.html)

---

This chapter describes, at a high level, how the Contoso Platform components are
typically deployed and how they communicate with each other.

## Typical Deployment Diagram

```
                     ┌───────────────────────┐
                     │   Contoso Web Client   │
                     │   (browser-based UI)   │
                     └───────────┬───────────┘
                                 │ HTTPS
                     ┌───────────▼───────────┐
                     │ Contoso Application    │
                     │ Server (REST API)      │
                     └──────┬─────────┬──────┘
                            │         │
                  ┌─────────▼──┐   ┌──▼───────────────┐
                  │ Contoso DB │   │ Contoso Message   │
                  │ (Postgres/ │   │ Broker             │
                  │  MSSQL)    │   └──┬───────────────┘
                  └────────────┘      │
                                      │
                             ┌────────▼────────┐
                             │ Background       │
                             │ Worker Processes  │
                             └───────────────────┘
```

## Component Responsibilities

- **Contoso Web Client** – renders the UI and sends REST requests to the application
  server. Requires no local installation beyond a supported browser.
- **Contoso Application Server** – validates requests, applies business rules, and reads
  from / writes to the database. Can be deployed as a single instance or in a clustered
  configuration for high availability.
- **Contoso Database** – the system of record. A dedicated database administrator account
  is required during installation to create schemas, users, and roles.
- **Contoso Message Broker** – decouples long-running or asynchronous tasks (for example,
  batch imports) from the request/response cycle of the application server.
- **Background Worker Processes** – consume messages from the broker and perform tasks
  such as report generation or data synchronization.

> **Tip:** For small pilot or test environments, all components can be installed on a
> single server. For production environments, Contoso recommends separating the
> application server, database, and message broker onto dedicated hosts.

---

[← Previous: Installation Overview](04-installation-overview.html) | [Next: Prerequisites and Preparation →](06-prerequisites.html)

</div>
</main>
</div>
</section>
