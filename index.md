---
layout: default
title: Home
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="hero-shell wrapper">
    <div class="hero-grid">
      <aside class="profile-column">
        <div class="profile-photo-wrap">
          <div class="profile-photo">
            <img src="{{ "/images/profile.jpg" | relative_url }}" alt="Profile photo">
          </div>
        </div>

        <p class="profile-name-main">Erik Feher</p>
        <p class="profile-name-alt">EF</p>
        <p class="profile-role">Senior Technical Writer</p>
        <p class="profile-org">OpenAI</p>

        <div class="social-links" aria-label="Social links">
          <span class="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16v12H4z" stroke="currentColor" stroke-width="1.6"/>
              <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6"/>
            </svg>
          </span>

          <span class="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.8"/>
            </svg>
          </span>

          <span class="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2a10 10 0 00-3 19c.5.1.7-.2.7-.5v-2c-3 .6-3.7-1.4-3.7-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.4-.3-5-1.2-5-5.4 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.5.1-3 0 0 .9-.3 3 .9a10 10 0 015.5 0c2.1-1.2 3-.9 3-.9.6 1.5.2 2.7.1 3 .7.8 1.1 1.8 1.1 3 0 4.2-2.6 5.1-5 5.4.4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0012 2z" stroke="currentColor" stroke-width="1.2"/>
            </svg>
          </span>

          <span class="social-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 9v9M6 6v.01M10 9v9M10 12c0-2 4-2 4 0v6" stroke="currentColor" stroke-width="1.6"/>
            </svg>
          </span>
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
          <span class="cv-button-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3v10.2m0 0l4-4m-4 4l-4-4M5 15.5v2.3c0 .66.54 1.2 1.2 1.2h11.6c.66 0 1.2-.54 1.2-1.2v-2.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
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
  </div>
</section>

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
