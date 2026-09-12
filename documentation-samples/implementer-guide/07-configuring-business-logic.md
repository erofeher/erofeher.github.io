---
layout: default
title: Configure business logic
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Configure business logic

[← Back to table of contents](index.html)

---

Business logic in the Contoso Platform is organized around alert types. Each alert type
defines the parameters that control how a category of detection behaves for a given
customer.

## Configure an alert type

1. Open the **Alert Types** page in the Contoso Admin Console.
2. Select an existing alert type, such as `LargeCashActivity`, or select
   **Add Alert Type** to create one.
3. Update the parameters described in the following table.
4. Save the alert type. Your changes take effect the next time the scheduled detection
   job runs.

### Example alert type parameters

| Parameter | Description |
|---|---|
| `alertType.enabled` | Whether the alert type is active. Values: `true`, `false`. |
| `alertType.lookbackPeriodDays` | Number of days of historical activity the platform considers when it evaluates the rule. Default: `30` |
| `alertType.minimumAmount` | Minimum transaction amount relevant to this alert type. Default: `1000` |
| `alertType.applicableTransactionTypes` | Comma-separated list of transaction types this alert type applies to, such as `CASH_DEPOSIT,CASH_WITHDRAWAL`. |
| `alertType.priority` | Priority assigned to cases this alert type creates. Values: `Low`, `Medium`, `High`. |

## Define user-defined values

Some parameters accept a list of user-defined values (UDVs) instead of a single value.
UDVs let the same alert type behave differently for different segments, such as retail
customers compared to business customers.

1. Open the alert type's **User Defined Values** tab.
2. Select **Add Value** and specify the segment, such as `CustomerSegment = Retail`,
   and the parameter override, such as `minimumAmount = 500`.
3. Save the value. At evaluation time, the platform applies the most specific matching
   value and falls back to the alert type's default parameters if no user-defined
   value matches.

> **Note:** The alert type name and parameter values above are illustrative examples
> only and don't represent any real detection scenario.

---

[← Previous: Configure exit points and custom functions](06-configuring-exit-points.html) | [Next: Configure detection rules and thresholds →](08-configuring-detection-rules-and-thresholds.html)

</div>
</main>
</div>
</section>
