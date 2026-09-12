---
layout: default
title: Configure exit points and custom functions
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Configure exit points and custom functions

[← Back to table of contents](index.html)

---

Exit points are defined locations in the Contoso Platform's processing pipeline where
you can insert custom logic without modifying the core product code. This topic
describes how to create and register a custom function at an exit point.

## Available exit points

| Exit point | Called when | Typical use |
|---|---|---|
| `BeforeIngestion` | Immediately after the platform reads a record from the source feed, before it applies field mapping. | Normalize or clean up raw values. |
| `AfterIngestion` | After field mapping, before detection rules evaluate the record. | Enrich a record with a derived value, such as a customer segment. |
| `BeforeScoring` | After detection rules run, before the platform combines scores. | Adjust an individual score factor with custom logic. |
| `AfterCaseCreation` | After the platform creates a case. | Assign the case to a specific queue or team. |

## Create a custom function

1. Open the **Custom Functions** page in the Contoso Admin Console.
2. Select **Add Function** and choose the exit point to attach it to.
3. Write the function body using the platform's expression language. The following
   example runs at the `AfterIngestion` exit point and derives a simple risk flag from
   the transaction amount:

   ```
   function EnrichTransaction(record):
       if record.transaction.amount > 10000:
           record.customFields.highValueFlag = true
       else:
           record.customFields.highValueFlag = false
       return record
   ```

4. Save and activate the function.
5. Test the function with a sample record before you enable it in a production
   environment. See
   [Test and validate your configuration](10-testing-and-validating-configuration.html).

## Best practices

- Keep custom functions small and focused on a single task.
- Reference a configurable parameter instead of embedding business thresholds directly
  in custom function code. See
  [Configure business logic](07-configuring-business-logic.html).
- Document the purpose of each custom function in its description field so future
  implementers understand why it exists.

> **Note:** The function name and logic above are illustrative examples only and don't
> reflect any real detection methodology.

---

[← Previous: Set up data integration](05-setting-up-data-integration.html) | [Next: Configure business logic →](07-configuring-business-logic.html)

</div>
</main>
</div>
</section>
