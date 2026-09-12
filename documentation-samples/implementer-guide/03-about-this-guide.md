---
layout: default
title: About this guide
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# About this guide

[← Back to table of contents](index.html)

---

This guide provides step-by-step procedures for configuring the Contoso Platform after
you install it. For installation steps, see the companion
[Contoso Platform Installation Guide](../installation-guide/index.html). This guide
is for implementation engineers and business analysts who adapt the solution to a
specific customer's data and business rules.

This guide includes:

- **[Solution overview and data flow](04-solution-overview-and-data-flow.html)**: How
  data moves through the solution, from ingestion to alert generation.
- **[Set up data integration](05-setting-up-data-integration.html)**: Map source data
  fields and define transaction types and codes.
- **[Configure exit points and custom functions](06-configuring-exit-points.html)**:
  Extend the solution's default behavior with custom logic.
- **[Configure business logic](07-configuring-business-logic.html)**: Define alert types
  and the parameters that control how they behave.
- **[Configure detection rules and thresholds](08-configuring-detection-rules-and-thresholds.html)**:
  Enable and tune detection rules.
- **[Configure scoring](09-configuring-scoring.html)**: Define how individual score
  factors combine into an overall case score.
- **[Test and validate your configuration](10-testing-and-validating-configuration.html)**:
  Confirm that a configuration change behaves as expected.

## Documentation disclaimer

This document might describe features that require a separate license and aren't part
of a standard product license. For licensing information, contact your account
representative.

The rule names, function names, field names, and threshold values in this guide are
entirely fictitious. They illustrate the shape of a configuration, not a real detection
methodology.

## Related documents

A solution like this typically includes these additional documents:

- Contoso Platform Installation Guide
- Contoso Platform Administrator Guide
- Contoso Platform User Guide

---

[← Previous: Revision history](02-revision-history.html) | [Next: Solution overview and data flow →](04-solution-overview-and-data-flow.html)

</div>
</main>
</div>
</section>
