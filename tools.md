---
layout: default
title: Tools I Use
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">     

      <main class="content-column">
        <span class="section-kicker">Stack</span>
        <h1 class="hero-section-title">Tools I Use</h1>
        <p class="about-text">Use this page to show your documentation stack. This is useful for recruiters because it makes your workflow concrete and easy to compare with job requirements.</p>

        <div class="subpage-stack">
          <section class="subpage-list">
            <h2>Documentation Toolset</h2>
            <ul>
              <li>Markdown and docs-as-code workflows</li>
              <li>GitHub, Git, and pull-request reviews</li>
              <li>VS Code, Vale, and editorial QA tooling</li>
              <li>Jira and Confluence for planning and collaboration</li>
              <li>ChatGPT and Copilot for AI-assisted drafting</li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>Preferred Setup</h2>
            <p>Add a paragraph about the tools you prefer most, why you use them, and how they improve quality, consistency, or delivery speed.</p>
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
