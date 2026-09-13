---
layout: default
title: SearchApi vs. SerpApi Benchmark
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column">
      <span class="section-kicker">Technical Research &amp; API Benchmark</span>
      <h1 class="hero-section-title">SearchApi vs. SerpApi: A Reproducible Google Search API Benchmark</h1>
      <p class="section-text">I compared SearchApi and SerpApi on the same Google Search workload to measure latency, reliability, response size, organic-result count, and result overlap. The code and raw measurements behind every number are included with this sample.</p>

      <section class="subpage-card research-card">
        <div class="research-actions">
          <a class="research-button" href="{{ "/technical-research/searchapi-serpapi/benchmark.py" | relative_url }}">View benchmark.py</a>
          <a class="research-button" href="{{ "/technical-research/searchapi-serpapi/analyze.py" | relative_url }}">View analyze.py</a>
          <a class="research-button" href="{{ "/technical-research/searchapi-serpapi/data/benchmark_results.csv" | relative_url }}">View raw CSV</a>
        </div>

        <h2>Key result</h2>
        <p>Across <strong>50 requests per provider</strong>, SearchApi recorded a <strong>median response time of 4.24 seconds</strong>, compared with <strong>8.42 seconds for SerpApi</strong>. That is <strong>49.7% lower median latency in this benchmark</strong>.</p>
        <p>This is a result from one controlled workload, not a claim that one provider is universally faster.</p>

        <h2>Results</h2>

        <div class="research-table-wrap">
          <table class="research-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>SearchApi</th>
                <th>SerpApi</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Requests</td><td>50</td><td>50</td></tr>
              <tr><td>Success rate</td><td>100%</td><td>100%</td></tr>
              <tr><td>Median latency</td><td><strong>4.24 s</strong></td><td>8.42 s</td></tr>
              <tr><td>Mean latency</td><td><strong>5.20 s</strong></td><td>12.38 s</td></tr>
              <tr><td>P95 latency</td><td><strong>11.77 s</strong></td><td>35.44 s</td></tr>
              <tr><td>Minimum latency</td><td>2.03 s</td><td><strong>1.38 s</strong></td></tr>
              <tr><td>Maximum latency</td><td><strong>25.53 s</strong></td><td>45.88 s</td></tr>
              <tr><td>Mean organic results</td><td>8.02</td><td>7.92</td></tr>
              <tr><td>Mean payload</td><td>75.0 KiB</td><td>80.5 KiB</td></tr>
            </tbody>
          </table>
        </div>

        <p>SearchApi had the lower per-query median latency for <strong>9 of 10 queries</strong>. The exception was <code>iphone 17 review</code>, where SerpApi had the lower median latency.</p>
        <p>The paired responses shared an average of <strong>6.42 organic URLs</strong>, with a mean <strong>Jaccard similarity of 71.4%</strong>. This matters because a latency comparison is more useful when the two services return substantially comparable result sets.</p>

        <h2>Methodology</h2>
        <p>I used 10 queries covering software, programming, weather, consumer products, travel, local search, automotive, AI, and shopping. Each query was run five times against each provider, producing <strong>100 measured requests: 50 per provider</strong>.</p>
        <p>Both providers used Google Search with <code>gl=us</code> and <code>hl=en</code>. SerpApi requests used <code>no_cache=true</code>. Provider order alternated between runs to reduce systematic bias from always testing one provider first. Requests were executed sequentially from the same client machine, with a two-second pause between requests.</p>
        <p>Latency was measured client-side with Python <code>time.perf_counter()</code> around the complete HTTP request. Every measurement was written immediately to the raw CSV, including HTTP status, response time, payload size, organic-result count, returned organic URLs, and any error.</p>

        <h2>Query set</h2>
        <p>The exact workload is available in <a href="{{ "/technical-research/searchapi-serpapi/queries.txt" | relative_url }}"><code>queries.txt</code></a>.</p>

        <h2>What I measured</h2>
        <ul>
          <li><strong>Median latency</strong> as the primary latency statistic because it is less sensitive to extreme requests than the mean.</li>
          <li><strong>Mean and P95 latency</strong> to expose overall cost and long-tail behavior.</li>
          <li><strong>Success rate</strong> from HTTP status codes.</li>
          <li><strong>Payload size</strong> from the raw HTTP response body.</li>
          <li><strong>Organic-result count</strong> from each provider's <code>organic_results</code>.</li>
          <li><strong>Result overlap</strong> using matching organic URLs and Jaccard similarity for each paired query/run.</li>
        </ul>

        <h2>Interpretation</h2>
        <p>The clearest difference was latency. SearchApi's median was roughly half SerpApi's in this run, and its P95 was also materially lower. Both providers completed all measured requests successfully.</p>
        <p>The result was not uniform. SerpApi produced the faster individual minimum request, and it had the lower median for one of the ten queries. The raw data also contains substantial latency outliers, which is why I report median and P95 rather than relying on a single request or only the arithmetic mean.</p>
        <p>Organic-result counts were close on average. URL overlap was substantial but not perfect, so the providers should not be treated as returning identical SERPs.</p>

        <h2>Limitations</h2>
        <p>This benchmark is intentionally small. It was run from one client location, during one measurement session, against 10 queries and 50 requests per provider. Network path, provider load, Google result changes, account configuration, query mix, and time of day can all affect results.</p>
        <p>The test measures end-to-end client-observed response time, not server processing time. It also does not evaluate every SERP feature, result quality, pricing, throughput under concurrency, or behavior across countries and search engines.</p>
        <p>For those reasons, the results support the narrower statement that <strong>SearchApi showed 49.7% lower median latency for this workload and test session</strong>, not that it is universally 49.7% faster.</p>

        <h2>Reproduce the benchmark</h2>
        <ol>
          <li>Install Python 3.</li>
          <li>Install dependencies with <code>python -m pip install -r requirements.txt</code>.</li>
          <li>Copy <code>.env.example</code> to <code>.env</code> and add valid SearchApi and SerpApi API keys.</li>
          <li>Run <code>python benchmark.py</code>.</li>
          <li>Run <code>python analyze.py</code> to calculate the summary metrics from the generated CSV.</li>
        </ol>
        <p>Running <code>benchmark.py</code> performs 50 requests against each provider, so API quotas should be checked before reproducing the full test.</p>

        <h2>Research files</h2>
        <ul>
          <li><a href="{{ "/technical-research/searchapi-serpapi/benchmark.py" | relative_url }}"><code>benchmark.py</code></a> — runs the controlled benchmark and records every request.</li>
          <li><a href="{{ "/technical-research/searchapi-serpapi/analyze.py" | relative_url }}"><code>analyze.py</code></a> — calculates summary and overlap metrics directly from the raw data.</li>
          <li><a href="{{ "/technical-research/searchapi-serpapi/queries.txt" | relative_url }}"><code>queries.txt</code></a> — exact query workload.</li>
          <li><a href="{{ "/technical-research/searchapi-serpapi/data/benchmark_results.csv" | relative_url }}"><code>benchmark_results.csv</code></a> — raw dataset from the reported run.</li>
          <li><a href="{{ "/technical-research/searchapi-serpapi/requirements.txt" | relative_url }}"><code>requirements.txt</code></a> — Python dependencies.</li>
        </ul>

        <h2>Raw data</h2>
        <p>The reported measurements are preserved as raw benchmark output rather than manually edited.</p>
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
