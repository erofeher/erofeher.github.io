---
layout: default
title: About Me
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <div class="subpage-grid">
      <aside class="profile-column">
        <div class="profile-photo-wrap">
          <div class="profile-photo" aria-label="Profile photo placeholder"></div>
          <div class="photo-badge" aria-hidden="true">☕</div>
        </div>

        <p class="profile-name-main">Erik Feher</p>
        <p class="profile-name-alt">EF</p>
        <p class="profile-role">Senior Technical Writer</p>
        <p class="profile-org">OpenAI</p>

        <div class="social-row" aria-label="Social links">
          <a class="social-icon" href="mailto:your@email.com" aria-label="Email">@</a>
          <a class="social-icon" href="https://x.com" aria-label="X">X</a>
          <a class="social-icon" href="https://github.com/yourusername" aria-label="GitHub">G</a>
          <a class="social-icon" href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">in</a>
        </div>
      </aside>

      <main class="content-column">
        <span class="section-kicker">About</span>
        <h1 class="hero-section-title">About Me</h1>
        <p class="about-text">Write your personal introduction here. Add a concise overview of your background, your documentation specialties, and the kinds of products or teams you support.</p>
        <p class="about-text">Use this page for the longer version of your story: your experience, your focus areas, your approach to technical writing, and what kind of work you want to be hired for.</p>

        <div class="subpage-stack">
          <section class="subpage-card">
            <h2>Professional Summary</h2>
            <p>Replace this with a polished summary that positions you as a technical writer, documentation specialist, or AI-assisted documentation expert.</p>
          </section>

          <section class="subpage-list">
            <h2>Core Focus Areas</h2>
            <ul>
              <li>API documentation and reference content</li>
              <li>Developer onboarding and product education</li>
              <li>Docs-as-code workflows and content systems</li>
              <li>AI-assisted writing and editorial acceleration</li>
            </ul>
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
