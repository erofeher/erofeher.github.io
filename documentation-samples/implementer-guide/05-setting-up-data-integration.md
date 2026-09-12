---
layout: default
title: Set up data integration
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
<div class="subpage-shell wrapper">
<main class="content-column" style="max-width: 1000px; margin: 0 auto;">
<div class="subpage-card" style="max-width: 100%;" markdown="1">

# Set up data integration

[← Back to table of contents](index.html)

---

Before the Contoso Platform can evaluate incoming records, it needs to understand the
shape of your source data. This topic describes how to map source fields and define
transaction types and codes.

## Map source data fields

1. Open the **Data Mapping** page in the Contoso Admin Console.
2. For each source field, enter the corresponding internal field name and data type.
3. Mark fields that detection requires as **mandatory**. The platform routes records
   that are missing a mandatory field to an exceptions queue instead of evaluating
   them.
4. Save and publish the mapping.

### Example field mapping

| Source field | Internal field | Data type | Mandatory |
|---|---|---|---|
| `src_txn_id` | `transaction.id` | String | Yes |
| `src_txn_amount` | `transaction.amount` | Decimal | Yes |
| `src_txn_currency` | `transaction.currency` | String (ISO 4217) | Yes |
| `src_txn_date` | `transaction.date` | Date/time | Yes |
| `src_party_ref` | `party.reference` | String | No |

## Define transaction types and codes

Transaction types group similar transactions so detection rules can target them
consistently. Transaction codes classify transactions more precisely within a type.

1. Open the **Transaction Types** page in the Contoso Admin Console.
2. Select **Add Transaction Type** and enter a unique name, such as `WIRE_OUT`.
3. Assign one or more transaction codes to the type, such as `WIRE_OUT_DOMESTIC` and
   `WIRE_OUT_INTERNATIONAL`.
4. Save the transaction type.

### Example transaction types and codes

| Transaction type | Transaction code | Description |
|---|---|---|
| `WIRE_OUT` | `WIRE_OUT_DOMESTIC` | Outgoing domestic wire transfer. |
| `WIRE_OUT` | `WIRE_OUT_INTERNATIONAL` | Outgoing international wire transfer. |
| `CASH_DEPOSIT` | `CASH_DEPOSIT_BRANCH` | Cash deposit made at a branch location. |
| `CASH_DEPOSIT` | `CASH_DEPOSIT_ATM` | Cash deposit made at an ATM. |

> **Note:** The transaction types and codes above are illustrative examples only. A
> real deployment typically defines dozens of types and codes tailored to its source
> systems.

---

[← Previous: Solution overview and data flow](04-solution-overview-and-data-flow.html) | [Next: Configure exit points and custom functions →](06-configuring-exit-points.html)

</div>
</main>
</div>
</section>
