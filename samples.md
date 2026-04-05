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
        <p>This page is ready for links to your existing writing samples. Replace the placeholders below with the exact pieces you want recruiters or hiring managers to open first.</p>

        <div class="subpage-stack">
          <section class="subpage-list">
            <h2>Featured Samples</h2>
            <ul>
              <li><a class="text-link" href="{{ "/api-docs.html" | relative_url }}">API Documentation Sample</a></li>
              <li><a class="text-link" href="{{ "/documentation-samples.html" | relative_url }}">Documentation Samples Overview</a></li>
              <li><a class="text-link" href="{{ "/hydrology-rest-api-sample.html" | relative_url }}">Hydrology REST API Sample</a></li>
              <li><a class="text-link" href="{{ "/weather-rest-api-sample.html" | relative_url }}">Weather REST API Sample</a></li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>How to Use This Page</h2>
            <p>You can organize this by API docs, user guides, internal docs, process docs, or case-study style breakdowns. Put your strongest and most relevant sample first.</p>
          </section>
        </div>
      </main>
    </div>
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
