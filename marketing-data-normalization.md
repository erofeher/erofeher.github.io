---
layout: default
title: Normalize Google Ads and Meta Ads Data
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column">
      <span class="section-kicker">Technical Content Sample · Marketing Data</span>
      <h1 class="hero-section-title">How to Normalize Google Ads and Meta Ads Data for Cross-Channel Reporting</h1>
      <p class="section-text">A practical guide to turning two source-specific advertising schemas into one analytics-ready data model in BigQuery.</p>

      <section class="subpage-card research-card data-article-card">
        <div class="sample-byline">
          <strong>Written by Erik Feher</strong>
          <span>Independent portfolio article · Google Ads API · Meta Marketing API · BigQuery</span>
        </div>

        <div class="article-callout">
          <strong>Goal</strong>
          <p>Create a stable reporting contract for campaign-level spend, impressions, and clicks while preserving the original source data for validation and troubleshooting.</p>
        </div>

        <h2>The problem: similar metrics, different schemas</h2>
        <p>Marketing teams often run campaigns across several advertising platforms, but comparing performance is harder than placing two exports side by side.</p>
        <p>Google Ads and Meta Ads can both report campaign, spend, impressions, clicks, and conversion-related metrics. The challenge is that the platforms expose those values through different field names, data types, account settings, and attribution rules.</p>
        <p>Before a cross-channel dashboard can be trusted, the source data needs a consistent reporting model.</p>

        <p>For example, the final table might look like this:</p>

        <div class="research-table-wrap">
          <table class="research-table">
            <thead>
              <tr>
                <th>date</th>
                <th>source</th>
                <th>campaign</th>
                <th>spend</th>
                <th>impressions</th>
                <th>clicks</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2026-09-01</td><td>google_ads</td><td>Brand Search</td><td>425.30</td><td>84,210</td><td>3,415</td></tr>
              <tr><td>2026-09-01</td><td>meta_ads</td><td>Autumn Campaign</td><td>612.75</td><td>143,820</td><td>2,907</td></tr>
            </tbody>
          </table>
        </div>
        <p class="sample-note">The sample campaign names and values in this article are illustrative.</p>

        <h2>1. Define the canonical model first</h2>
        <p>Do not start by copying every field from every API into one large table. Start with the reporting questions the dataset needs to answer and define the smallest useful shared schema.</p>

<pre><code>date
source
campaign_id
campaign
spend
currency
impressions
clicks</code></pre>

        <p>This becomes the contract between the ingestion layer and downstream reporting. New source systems can be added later as long as they can map into the same contract.</p>

        <div class="article-callout article-callout-secondary">
          <strong>Why keep <code>source</code> and <code>campaign_id</code>?</strong>
          <p>Campaign names are not unique. Two platforms can both contain a campaign called <code>Summer Sale</code>. The source and platform ID preserve identity after the data is combined.</p>
        </div>

        <h2>2. Map Google Ads fields</h2>
        <p>Google Ads Query Language (GAQL) can retrieve campaign attributes, segments, and performance metrics in one query. A campaign-level query can request fields such as:</p>

<pre><code>SELECT
  campaign.id,
  campaign.name,
  customer.currency_code,
  metrics.clicks,
  metrics.impressions,
  metrics.cost_micros,
  segments.date
FROM campaign
WHERE segments.date DURING LAST_30_DAYS</code></pre>

        <p>The main transformation in this minimal model is cost. Google Ads exposes <code>metrics.cost_micros</code> as an integer value in micros, so one currency unit is represented by 1,000,000 micros.</p>

<pre><code>425300000 micros / 1,000,000 = 425.30</code></pre>

        <div class="research-table-wrap">
          <table class="research-table">
            <thead>
              <tr><th>Google Ads field</th><th>Canonical field</th><th>Transformation</th></tr>
            </thead>
            <tbody>
              <tr><td><code>segments.date</code></td><td><code>date</code></td><td>Cast to DATE if required</td></tr>
              <tr><td><code>campaign.id</code></td><td><code>campaign_id</code></td><td>Cast to STRING for a common ID type</td></tr>
              <tr><td><code>campaign.name</code></td><td><code>campaign</code></td><td>Rename</td></tr>
              <tr><td><code>customer.currency_code</code></td><td><code>currency</code></td><td>Keep ISO currency code</td></tr>
              <tr><td><code>metrics.cost_micros</code></td><td><code>spend</code></td><td>Divide by 1,000,000</td></tr>
              <tr><td><code>metrics.impressions</code></td><td><code>impressions</code></td><td>Rename</td></tr>
              <tr><td><code>metrics.clicks</code></td><td><code>clicks</code></td><td>Rename</td></tr>
            </tbody>
          </table>
        </div>

        <h2>3. Map Meta Ads fields</h2>
        <p>Meta campaign performance is available through the Marketing API Insights endpoint. A simplified campaign-level request can ask for the same reporting concepts using Meta's field names:</p>

<pre><code>GET /act_{ad_account_id}/insights
  ?level=campaign
  &amp;time_increment=1
  &amp;fields=date_start,campaign_id,campaign_name,spend,impressions,clicks</code></pre>

        <div class="research-table-wrap">
          <table class="research-table">
            <thead>
              <tr><th>Meta Ads field</th><th>Canonical field</th><th>Transformation</th></tr>
            </thead>
            <tbody>
              <tr><td><code>date_start</code></td><td><code>date</code></td><td>Cast to DATE if required</td></tr>
              <tr><td><code>campaign_id</code></td><td><code>campaign_id</code></td><td>Keep as STRING</td></tr>
              <tr><td><code>campaign_name</code></td><td><code>campaign</code></td><td>Rename</td></tr>
              <tr><td><code>spend</code></td><td><code>spend</code></td><td>Cast to NUMERIC</td></tr>
              <tr><td><code>impressions</code></td><td><code>impressions</code></td><td>Cast to INT64 if required</td></tr>
              <tr><td><code>clicks</code></td><td><code>clicks</code></td><td>Cast to INT64 if required</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4. Preserve raw data and normalize in a separate layer</h2>
        <p>Normalization should not destroy the original response. A safer design keeps source-specific staging tables and creates a reporting layer on top.</p>

        <div class="data-flow" role="img" aria-label="Google Ads and Meta Ads raw tables flow into a normalization layer, then into a reporting table and BI dashboard.">
          <div class="data-flow-sources">
            <div class="data-flow-node"><strong>Google Ads API</strong><span>Raw Google Ads table</span></div>
            <div class="data-flow-node"><strong>Meta Marketing API</strong><span>Raw Meta Ads table</span></div>
          </div>
          <div class="data-flow-arrow">↓</div>
          <div class="data-flow-node data-flow-node-focus"><strong>Normalization layer</strong><span>Rename · cast · standardize · validate</span></div>
          <div class="data-flow-arrow">↓</div>
          <div class="data-flow-node"><strong>Reporting table</strong><span>Stable cross-channel schema</span></div>
          <div class="data-flow-arrow">↓</div>
          <div class="data-flow-node"><strong>BI / analysis</strong><span>Looker Studio · dashboards · SQL</span></div>
        </div>

        <p>This separation gives analysts a simple model without removing the evidence needed to investigate a discrepancy or change a transformation later.</p>

        <h2>5. Build the normalized table in BigQuery</h2>
        <p>The exact staging schema depends on the ingestion method. The following example assumes source-specific tables already exist in BigQuery.</p>

<pre><code>WITH google_ads AS (
  SELECT
    CAST(date AS DATE) AS date,
    'google_ads' AS source,
    CAST(campaign_id AS STRING) AS campaign_id,
    campaign_name AS campaign,
    SAFE_DIVIDE(cost_micros, 1000000.0) AS spend,
    currency_code AS currency,
    CAST(impressions AS INT64) AS impressions,
    CAST(clicks AS INT64) AS clicks
  FROM `marketing_raw.google_ads_campaigns`
),

meta_ads AS (
  SELECT
    CAST(date_start AS DATE) AS date,
    'meta_ads' AS source,
    CAST(campaign_id AS STRING) AS campaign_id,
    campaign_name AS campaign,
    CAST(spend AS NUMERIC) AS spend,
    account_currency AS currency,
    CAST(impressions AS INT64) AS impressions,
    CAST(clicks AS INT64) AS clicks
  FROM `marketing_raw.meta_ads_campaigns`
)

SELECT * FROM google_ads
UNION ALL
SELECT * FROM meta_ads;</code></pre>

        <p>The dashboard no longer needs to know that Google uses <code>cost_micros</code> while Meta uses <code>spend</code>. That source-specific complexity is handled once in the transformation layer.</p>

        <h2>6. Do not normalize meaning blindly</h2>
        <p>A schema can be technically consistent while still being analytically wrong. Renaming two fields to the same canonical name does not guarantee they measure the same thing.</p>

        <h3>Conversions and attribution</h3>
        <p>Conversion reporting is the clearest example. Platforms can use different event definitions, attribution windows, reporting settings, and conversion logic. A single canonical <code>conversions</code> column is useful only after the team defines which source events and attribution settings are considered comparable.</p>
        <p>Keep source-specific conversion fields in the raw layer and document the exact rule used to populate any normalized conversion metric.</p>

        <h3>Clicks</h3>
        <p>Even a familiar metric such as clicks should be checked before comparison. Platform-level <code>clicks</code> can follow different product definitions. If the business question specifically requires link or outbound clicks, map the closest equivalent fields instead of assuming every click metric is interchangeable.</p>

        <h3>Currency</h3>
        <p>Never add spend from different currencies without an explicit conversion rule. Preserve the source currency and, when needed, add a separate normalized amount such as <code>spend_eur</code> together with the exchange-rate source and conversion date.</p>

        <h3>Timezone</h3>
        <p>Daily totals can move between dates when source accounts use different timezones. Decide whether reporting should preserve each account's local date or convert events into a shared reporting timezone, then document that decision.</p>

        <h2>7. Validate the pipeline before publishing the dashboard</h2>
        <p>A successful SQL query is not evidence that the reporting is correct. Validation should compare the transformed data with the source platform for a controlled date range.</p>

        <ol class="validation-list">
          <li><strong>Choose a fixed period.</strong> Use the same account, date range, timezone, filters, and attribution settings in the platform UI and the warehouse query.</li>
          <li><strong>Compare totals.</strong> Reconcile spend, impressions, and clicks by source and campaign.</li>
          <li><strong>Check row shape.</strong> Look for missing dates, duplicate source/campaign/date keys, unexpected nulls, and data-type failures.</li>
          <li><strong>Test edge cases.</strong> Include zero-spend campaigns, renamed campaigns, inactive campaigns, and days with no activity.</li>
          <li><strong>Set an acceptance rule.</strong> Exact-match metrics should reconcile exactly unless a documented source behavior explains a difference.</li>
        </ol>

        <div class="article-callout article-callout-secondary">
          <strong>Example validation check</strong>
          <p>If Google Ads shows €4,821.74 spend and 31,204 clicks for the selected account and period, the normalized Google Ads rows should return the same totals under the same settings. A mismatch should be investigated before the dashboard is released.</p>
        </div>

        <h2>8. Query the normalized dataset</h2>
        <p>Once the source differences have been handled, cross-channel analysis becomes much simpler:</p>

<pre><code>SELECT
  source,
  SUM(spend) AS spend,
  SUM(impressions) AS impressions,
  SUM(clicks) AS clicks,
  SAFE_DIVIDE(SUM(clicks), SUM(impressions)) AS ctr
FROM `marketing_reporting.campaign_performance`
WHERE date BETWEEN '2026-09-01' AND '2026-09-30'
GROUP BY source
ORDER BY spend DESC;</code></pre>

        <p>The reporting query does not need to know how either source API represented cost, dates, or campaign identifiers. It consumes a stable model.</p>

        <h2>What this architecture enables</h2>
        <ul>
          <li><strong>Consistent dashboards:</strong> BI users work with one predictable set of fields instead of learning every source schema.</li>
          <li><strong>Faster source onboarding:</strong> a new ad platform only needs a mapping into the canonical contract.</li>
          <li><strong>Lower maintenance:</strong> transformation logic is centralized instead of duplicated across dashboards.</li>
          <li><strong>Auditability:</strong> raw source data remains available when a KPI needs to be traced or reprocessed.</li>
          <li><strong>Clear metric governance:</strong> attribution, currency, timezone, and KPI definitions become documented technical decisions.</li>
        </ul>

        <h2>Final principle</h2>
        <p>The goal of normalization is not to make different APIs look identical at any cost. It is to give analysts a stable interface while preserving enough source context to keep the reporting accurate.</p>

        <p><strong>Normalize the interface. Preserve the source. Validate the meaning.</strong></p>

        <h2>References</h2>
        <ul>
          <li><a href="https://developers.google.com/google-ads/api/docs/query/overview">Google Ads API — Google Ads Query Language overview</a></li>
          <li><a href="https://developers.google.com/google-ads/api/fields/v25/metrics">Google Ads API — metrics field reference, including <code>metrics.cost_micros</code></a></li>
          <li><a href="https://developers.google.com/google-ads/api/reference/rpc/v25/Customer">Google Ads API — customer currency and timezone fields</a></li>
          <li><a href="https://www.postman.com/meta/facebook-marketing-api/overview">Meta Facebook Marketing API — official Postman collection</a></li>
          <li><a href="https://cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions#safe_divide">BigQuery — <code>SAFE_DIVIDE</code></a></li>
        </ul>
      </section>
    </main>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark') document.body.classList.add('dark-mode');
    button.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('portfolio-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  });
</script>
