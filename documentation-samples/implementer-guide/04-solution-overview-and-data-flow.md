---
layout: default
title: Solution overview and data flow
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Solution overview and data flow

[← Back to table of contents](index.html)

---

Before you configure the Contoso Platform, it helps to understand how data flows
through the solution, from ingestion to the moment the platform presents an alert to a
user.

## High-level data flow

```
 Source systems             Contoso Platform
┌────────────────┐         ┌────────────────────────────────────────────┐
│ Customer data   │         │ 1. Data ingestion                          │
│ Transactions    │───────▶ │    (field mapping, transaction typing)     │
│ Reference data  │         │              │                             │
│ feeds           │         │              ▼                             │
└────────────────┘         │ 2. Exit points and custom functions        │
                            │    (optional enrichment logic)             │
                            │              │                             │
                            │              ▼                             │
                            │ 3. Business logic and detection rules      │
                            │    (rule evaluation, thresholds)           │
                            │              │                             │
                            │              ▼                             │
                            │ 4. Scoring                                 │
                            │    (score factors combined into a case)    │
                            │              │                             │
                            │              ▼                             │
                            │ 5. Case and alert presentation             │
                            └────────────────────────────────────────────┘
```

## Stage descriptions

1. **Data ingestion**: The platform maps incoming records to its internal data model,
   including classifying each record by transaction type and code. See
   [Set up data integration](05-setting-up-data-integration.html).
2. **Exit points and custom functions**: You can insert custom logic at defined hook
   points to enrich or transform a record before the platform evaluates it. See
   [Configure exit points and custom functions](06-configuring-exit-points.html).
3. **Business logic and detection rules**: Configurable rules evaluate each record, or
   group of records, against defined thresholds. See
   [Configure business logic](07-configuring-business-logic.html) and
   [Configure detection rules and thresholds](08-configuring-detection-rules-and-thresholds.html).
4. **Scoring**: When a rule triggers, the platform combines its score factors into an
   overall score for the case. See [Configure scoring](09-configuring-scoring.html).
5. **Case and alert presentation**: The platform presents cases that meet the
   configured scoring criteria to users through the case management interface.

> **Note:** This diagram is illustrative. The number and order of processing stages in
> a real deployment depend on the licensed modules and the configuration you apply.

---

[← Previous: About this guide](03-about-this-guide.html) | [Next: Set up data integration →](05-setting-up-data-integration.html)

</div>
</main>
</div>
</section>
