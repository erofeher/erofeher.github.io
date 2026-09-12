---
layout: default
title: Configure scoring
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Configure scoring

[← Back to table of contents](index.html)

---

When one or more detection rules trigger for a record, the Contoso Platform combines
their score factors into a single overall score for the resulting case. This topic
describes how to configure score factors and how the platform combines them.

## Configure a score factor

1. Open the detection rule and select the **Scoring** tab.
2. Set the base score the rule contributes when it triggers, such as `25`.
3. Optionally, set a multiplier that increases the score based on how far a value
   exceeds its threshold. For example, a transaction that's 5 times the threshold
   might contribute a higher score than one that's only 1.1 times the threshold.
4. Save the score factor configuration.

### Example score factors

| Rule name | Base score | Multiplier applied |
|---|---|---|
| `RapidMovementOfFunds` | 20 | Number of transfers above the threshold |
| `UnusualCashActivity` | 30 | Deviation from peer group average |
| `StructuringPattern` | 40 | None (fixed score) |

## Combine score factors into a case score

By default, the Contoso Platform sums all triggered score factors for a case, then
caps the result at a configurable maximum, such as `100`. Administrators can also
configure a minimum score threshold below which the platform doesn't create a case.

| Parameter | Description |
|---|---|
| `scoring.maxScore` | Maximum possible case score after combining all factors. Default: `100` |
| `scoring.minimumCaseScore` | Minimum combined score required to create a case. Default: `50` |
| `scoring.combinationMethod` | How the platform combines factors. Values: `Sum`, `WeightedAverage`. Default: `Sum` |

## Disable a score factor

You can temporarily disable a score factor without disabling the entire rule, which is
useful while you investigate a possible false-positive pattern.

1. Open the detection rule and select the **Scoring** tab.
2. Clear the **Enabled** checkbox next to the score factor.
3. Save your change. The rule continues to run and you can still review it, but it no
   longer contributes to the case score.

> **Note:** The scoring values above are illustrative examples only and don't
> represent any real scoring methodology.

---

[← Previous: Configure detection rules and thresholds](08-configuring-detection-rules-and-thresholds.html) | [Next: Test and validate your configuration →](10-testing-and-validating-configuration.html)

</div>
</main>
</div>
</section>
