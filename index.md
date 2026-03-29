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
        <p class="profile-role">Senior Technical Writer</p>
        <p class="profile-org">OpenAI</p>

        <div class="social-links" aria-label="Social links">
          <span class="social-icon icon-email" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 4h20v16H2V4zm2 2v.5l8 5 8-5V6l-8 5-8-5z"/>
            </svg>
          </span>

          <span class="social-icon icon-x" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2H21l-6.555 7.49L22.154 22H16.12l-4.725-6.185L5.98 22H3.22l7.01-8.01L2.846 2H9.03l4.271 5.644L18.244 2zm-.968 18.35h1.527L8.2 3.566H6.562L17.276 20.35z"/>
            </svg>
          </span>

          <span class="social-icon icon-instagram" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
              <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
            </svg>
          </span>

          <span class="social-icon icon-github" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.13 2.92.87.09-.67.35-1.13.63-1.39-2.22-.26-4.55-1.15-4.55-5.11 0-1.13.39-2.05 1.03-2.78-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0112 6.84c.85 0 1.71.12 2.51.35 1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.73 1.03 1.65 1.03 2.78 0 3.97-2.34 4.85-4.57 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.02 10.02 0 0022 12.24C22 6.58 17.52 2 12 2z"/>
            </svg>
          </span>

          <span class="social-icon icon-linkedin" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.13V23h-4v-7.73c0-1.84-.03-4.2-2.56-4.2-2.57 0-2.97 2-2.97 4.07V23h-4V8z"/>
            </svg>
          </span>

          <span class="social-icon icon-scholar" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-6.18 9.46L4 13.48V17c0 2.76 3.58 5 8 5s8-2.24 8-5v-3.52l-1.82-.99L12 16l-6.18-3.54z"/>
            </svg>
          </span>

          <span class="social-icon icon-id" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 5.5A2.5 2.5 0 015.5 3h13A2.5 2.5 0 0121 5.5v13a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 013 18.5v-13zM8 12a2 2 0 100-4 2 2 0 000 4zm4-5h6v2h-6V7zm0 4h6v2h-6v-2zm-6 4h12v2H6v-2z"/>
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
            <h2 class="meta-block-title">What I'm Doing</h2>
            <ul class="bullet-list">
              <li>Designing end-to-end AI-assisted documentation workflows (GitHub Copilot, Vale)</li>
              <li>Integrating documentation with engineering systems (Jira, Confluence, MCP Server)</li>
              <li>Building scalable Docs-as-Code documentation systems (Markdown + Git)</li>
              <li>Creating developer-first API documentation for SaaS and cloud products</li>
            </ul>
          </section>

          <section>
            <h2 class="meta-block-title">Tools I Use</h2>

            <div class="tool-group">
              <strong>AI &amp; Writing</strong>
              <p>GitHub Copilot • ChatGPT</p>
            </div>

            <div class="tool-group">
              <strong>Development</strong>
              <p>VSCode • Markdown • HTML • MadCap Flare</p>
            </div>

            <div class="tool-group">
              <strong>Collaboration</strong>
              <p>Jira • Confluence • Atlassian MCP Server</p>
            </div>

            <div class="tool-group">
              <strong>Quality &amp; Workflow</strong>
              <p>GitHub • GitLab • Vale • Postman</p>
            </div>
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
