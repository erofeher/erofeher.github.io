---
layout: default
title: REST API Samples
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column">
      <span class="section-kicker">Portfolio</span>
      <h1 class="hero-section-title">REST API Samples</h1>
      <p class="section-text">Selected API documentation samples demonstrating endpoint documentation, request and response structures, parameters, examples, and developer-focused guidance.</p>

      <div class="subpage-stack">
        <section class="subpage-list">
          <h2>API Documentation Samples</h2>
          <ul>
            <li><a class="text-link" href="{{ "/api-docs.html" | relative_url }}">API Documentation Sample – Payment Service</a></li>
            <li><a class="text-link" href="{{ "/save-metadata-rest-api-sample.html" | relative_url }}">Metadata REST API Sample</a></li>
            <li><a class="text-link" href="{{ "/weather-rest-api-sample.html" | relative_url }}">Weather REST API Sample</a></li>
            <li><a class="text-link" href="{{ "/hydrology-rest-api-sample.html" | relative_url }}">Hydrology REST API Sample</a></li>
          </ul>
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
