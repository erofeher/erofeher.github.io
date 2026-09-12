---
layout: default
title: "Solution architecture"
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">
<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Solution architecture

[← Back to table of contents](index.html)

---

This topic describes, at a high level, how the Contoso Platform components are
typically deployed and how they communicate with each other.

## Typical deployment diagram

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

## Component responsibilities

- **Contoso Web Client**: Renders the UI and sends REST requests to the application
  server. Requires no local installation beyond a supported browser.
- **Contoso Application Server**: Validates requests, applies business rules, and reads
  from and writes to the database. You can deploy it as a single instance or in a
  clustered configuration for high availability.
- **Contoso Database**: The system of record. Installation requires a dedicated
  database administrator account to create schemas, users, and roles.
- **Contoso Message Broker**: Decouples long-running or asynchronous tasks, such as
  batch imports, from the application server's request/response cycle.
- **Background Worker Processes**: Consume messages from the broker and perform tasks
  such as report generation or data synchronization.

> **Tip:** For small pilot or test environments, you can install all components on a
> single server. For production environments, Contoso recommends separating the
> application server, database, and message broker onto dedicated hosts.

---

[← Previous: Installation overview](04-installation-overview.html) | [Next: Prerequisites and preparation →](06-prerequisites.html)

</div>
</main>
</div>
</section>
