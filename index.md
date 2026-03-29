---
layout: default
title: Home
---

<link rel="stylesheet" href="/assets/style.css">

<div class="home-page">
  <section class="hero-stage" id="bio">
    <div class="hero-grid wrapper">
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
          <a class="social-icon" href="mailto:erofeher11@hotmail.com">@</a>
          <a class="social-icon" href="https://x.com">X</a>
          <a class="social-icon" href="https://instagram.com">◎</a>
          <a class="social-icon" href="https://github.com/erofeher">G</a>
          <a class="social-icon" href="https://linkedin.com">in</a>
          <a class="social-icon" href="#">g</a>
          <a class="social-icon" href="#">ID</a>
        </div>
      </aside>

      <main class="content-column">
        <h1 class="hero-section-title">About Me</h1>

        <p class="about-text">
          I create clear, scalable technical documentation for API, SaaS, and cloud products.
          My work covers developer guides, API references, onboarding content, troubleshooting
          material, and documentation systems designed for long-term maintainability.
        </p>

        <p class="about-text">
          I work across Jira, Confluence, Markdown, Git, VS Code, Vale, GitHub Copilot,
          ChatGPT, and docs-as-code workflows. I focus on translating complex product details
          into content that is precise, practical, and easy to navigate.
        </p>

        <a class="cv-button" href="documentation-samples.html">
          Download CV
        </a>

        <div class="hero-meta-grid">
          <section>
            <h2 class="meta-block-title">Interests</h2>
            <ul class="bullet-list">
              <li>Artificial Intelligence</li>
              <li>Computational Linguistics</li>
              <li>Information Retrieval</li>
            </ul>
          </section>

          <section>
            <h2 class="meta-block-title">Education</h2>
            <ul class="education-list">
              <li>
                <strong>MSc Technical Communication</strong>
                <span>Your University</span>
              </li>
              <li>
                <strong>BSc Information Technology</strong>
                <span>Your University</span>
              </li>
              <li>
                <strong>Docs-as-Code Certifications</strong>
                <span>Self-directed professional training</span>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  </section>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark') {
      document.body.classList.add('dark-mode');
    }

    button.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem(
        'portfolio-theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light'
      );
    });
  });
</script>
