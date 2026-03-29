---
layout: default
title: AI-Assisted Documentation
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <div class="subpage-grid">
      <aside class="profile-column">
        <div class="profile-photo-wrap">
          <div class="profile-photo"></div>
          <div class="photo-badge">⚙</div>
        </div>
        <p class="profile-name-main">Erik Feher</p>
        <p class="profile-name-alt">EF</p>
        <p class="profile-role">AI-Enabled Writing</p>
        <p class="profile-org">Documentation Systems</p>
      </aside>

      <main class="content-column">
        <span class="section-kicker">Workflow</span>
        <h1 class="hero-section-title">AI-Assisted Documentation</h1>
        <p class="about-text">Use this page to explain how you integrate ChatGPT, Copilot, automation, and review loops into your writing process without sacrificing accuracy, consistency, or editorial quality.</p>

        <div class="subpage-stack">
          <section class="subpage-list">
            <h2>Where AI Helps</h2>
            <ul>
              <li>First-draft generation for repetitive content structures</li>
              <li>Rewriting for clarity, consistency, and tone</li>
              <li>Content gap analysis and outline creation</li>
              <li>Terminology alignment and editing support</li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>How You Keep Quality High</h2>
            <p>Describe your human review process, fact-checking standards, SME validation, and governance rules for AI-generated content.</p>
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
