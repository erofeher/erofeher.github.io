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

        <p class="about-text">
          I use an AI-assisted workflow that integrates directly with development and documentation tools.
        </p>

        <div class="subpage-stack">

          <section class="subpage-card">
            <img src="{{ "/images/ai_workflow_diagram.png" | relative_url }}" alt="AI Workflow" style="width:100%; border-radius:12px; margin-bottom:20px;">
          </section>

          <section class="subpage-list">
            <h2>Workflow Overview</h2>
            <ul>
              <li>Drafting and structuring content using GitHub Copilot within VSCode.</li>
              <li>Refining and improving documentation using ChatGPT.</li>
              <li>Fetching requirements and context from Jira and Confluence via Atlassian MCP server.</li>
              <li>Transforming technical inputs into structured, user-focused documentation.</li>
              <li>Maintaining consistency and quality using Vale.</li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>Impact</h2>
            <p>
              This workflow enables faster delivery, better alignment with engineering teams,
              and scalable documentation systems.
            </p>
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
