---
layout: default
title: Test and validate your configuration
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Test and validate your configuration

[← Back to table of contents](index.html)

---

After you change a configuration, such as data mapping, exit points, business logic,
detection rules, or scoring, validate the change before you enable it in a production
environment.

## Validation checklist

| # | Check | How to verify |
|---|---|---|
| 1 | Configuration saved without errors | The Contoso Admin Console shows no validation errors when you save the configuration. |
| 2 | Sample records process without exceptions | Submit a small batch of representative sample records through the **Test Ingestion** tool and confirm that no records land in the exceptions queue unexpectedly. |
| 3 | Expected rules trigger | Use the **Rule Simulation** tool to confirm that the rules you changed trigger on the sample records you expect, and don't trigger on records you expect to pass. |
| 4 | Scores calculate as expected | Compare the simulated case score against your expected value, based on the score factors you configured. See [Configure scoring](09-configuring-scoring.html). |
| 5 | Cases route to the correct queue | Confirm that a test case from the simulation appears in the expected case queue. |

## Use the rule simulation tool

1. Open **Rule Simulation** in the Contoso Admin Console.
2. Upload or select a set of sample records.
3. Choose the detection rules and alert types to include in the simulation.
4. Run the simulation and review the results summary, which lists:
   - Records that triggered one or more rules.
   - The score factors each triggered rule contributed.
   - The final combined case score.
5. Compare the results against your expectations before you promote the configuration
   to a live environment.

## Roll back a change

If validation reveals unexpected results:

1. Open the **Configuration History** page for the item you changed: an alert type,
   detection rule, or score factor.
2. Select the previous version, then select **Restore**.
3. Rerun the validation checklist to confirm that the rollback behaves as expected.

> **Tip:** Keep a record of validation results, such as exported simulation reports,
> alongside your configuration change requests, so future implementers can see why you
> chose a particular threshold or score factor.

---

You've completed the Contoso Platform Implementer Guide sample template.

[← Previous: Configure scoring](09-configuring-scoring.html) | [Back to table of contents](index.html)

</div>
</main>
</div>
</section>
