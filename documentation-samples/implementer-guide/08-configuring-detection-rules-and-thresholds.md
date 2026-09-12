---
layout: default
title: Configure detection rules and thresholds
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Configure detection rules and thresholds

[← Back to table of contents](index.html)

---

Detection rules evaluate incoming records, or groups of records, against configurable
thresholds. This topic describes how to activate a rule and tune its thresholds.

## Activate or deactivate a detection rule

1. Open the **Detection Rules** page in the Contoso Admin Console.
2. Locate the rule, such as `RapidMovementOfFunds`.
3. Toggle the **Active** switch to enable or disable the rule.
4. Save your change.

## Threshold types

The Contoso Platform supports two general categories of thresholds:

| Threshold type | Description |
|---|---|
| Individual threshold | Applied to a single entity, such as one account or one customer. |
| Population threshold | Applied relative to a peer group, such as the average behavior of similar customers. |

### Configure an individual threshold

1. Open the detection rule and select the **Individual Thresholds** tab.
2. Set the threshold value, such as a maximum number of transactions per day.
3. Optionally, define a different threshold for each customer segment using
   user-defined values. See [Configure business logic](07-configuring-business-logic.html).

### Configure a population threshold

1. Open the detection rule and select the **Population Thresholds** tab.
2. Choose the peer group definition to compare against, such as
   `CustomerSegment + Country`.
3. Set the deviation threshold as a multiple of the peer group's average activity,
   such as 3 times the average.

### Example rule configuration

| Rule name | Threshold type | Example threshold |
|---|---|---|
| `RapidMovementOfFunds` | Individual | More than 5 outbound transfers within 24 hours. |
| `UnusualCashActivity` | Population | Cash deposits exceeding 3 times the peer group average over 30 days. |
| `StructuringPattern` | Individual | 3 or more deposits just below a defined reporting threshold within 7 days. |

> **Note:** The rule names and threshold values above are illustrative examples only.
> They don't represent any real detection methodology and shouldn't be used as the
> basis for an actual compliance program.

---

[← Previous: Configure business logic](07-configuring-business-logic.html) | [Next: Configure scoring →](09-configuring-scoring.html)

</div>
</main>
</div>
</section>
