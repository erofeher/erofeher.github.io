---
layout: default
title: How I Work
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <div class="subpage-grid">
      <aside class="profile-column">
        <div class="profile-photo-wrap">
          <div class="profile-photo"></div>
          <div class="photo-badge">↺</div>
        </div>
        <p class="profile-name-main">Erik Feher</p>
        <p class="profile-name-alt">EF</p>
        <p class="profile-role">Structured Process</p>
        <p class="profile-org">Delivery & Review</p>
      </aside>

      <main class="content-column">
        <span class="section-kicker">Process</span>
        <h1 class="hero-section-title">How I Work</h1>
        <p class="about-text">Use this page to explain your process from intake to final delivery. This is a strong hiring page because it shows how you think, how you communicate, and how you reduce chaos for product teams.</p>

        <div class="subpage-stack">
          <section class="subpage-list">
            <h2>Typical Workflow</h2>
            <ul>
              <li>Discovery and stakeholder interviews</li>
              <li>Content audit and structure planning</li>
              <li>Drafting and technical validation</li>
              <li>Review, revision, and publishing</li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>Collaboration Style</h2>
            <p>Describe how you work with product managers, engineers, support teams, and subject-matter experts to gather accurate information and ship useful documentation.</p>
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
