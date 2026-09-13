---
layout: default
title: Documentation Samples
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column">
      <span class="section-kicker">Portfolio</span>
      <h1 class="hero-section-title">Documentation Samples</h1>
      <p class="section-text">Selected examples of user documentation, structured technical guidance, and technical research. API-focused documentation samples are available separately under REST API Samples.</p>

      <div class="subpage-stack">
        <section class="subpage-card">
          <h2>Installation Guide Sample</h2>
          <p>A complete enterprise-style installation guide for a fictitious software platform, covering prerequisites, architecture, configuration, installation, and verification.</p>
          <a class="text-link" href="{{ "/documentation-samples/installation-guide/" | relative_url }}">View Installation Guide →</a>
        </section>

        <section class="subpage-card">
          <h2>User Guide Sample – Compliance Monitor</h2>
          <p>A user guide sample demonstrating task-based guidance, clear structure, and practical instructions for an enterprise application.</p>
          <a class="text-link" href="{{ "/Compliance_Monitor_User_Guide_Sample.html" | relative_url }}">View User Guide →</a>
        </section>

        <section class="subpage-card">
          <h2>Technical Research &amp; API Benchmark</h2>
          <p>A reproducible comparison of SearchApi and SerpApi using Python-based testing, raw data analysis, performance metrics, and technical writing.</p>
          <p><strong>API · Python · Data · Technical Research</strong></p>
          <a class="text-link" href="{{ "/technical-research/searchapi-serpapi/" | relative_url }}">View SearchApi vs. SerpApi Benchmark →</a>
        </section>
      </div>
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
