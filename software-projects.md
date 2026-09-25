---
layout: default
title: Software Projects
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column">
      <span class="section-kicker">Development Portfolio</span>
      <h1 class="hero-section-title">Software Projects</h1>
      <p class="section-text">Selected software projects focused on practical front-end development, real-time data visualization, API integration, state management, and automated testing.</p>

      <div class="software-project-grid">
        <article class="software-project-card">
          <div class="project-preview" aria-hidden="true">
            <div class="project-preview-bar"><span></span><span></span><span></span></div>
            <div class="project-preview-body">
              <div class="preview-kpis"><i></i><i></i><i></i><i></i></div>
              <div class="preview-chart"><b></b><b></b></div>
              <div class="preview-table"><i></i><i></i><i></i></div>
            </div>
          </div>

          <div class="software-project-content">
            <span class="project-status">Completed Project</span>
            <h2>Real-Time Mission Analytics Dashboard</h2>
            <p>A responsive real-time monitoring dashboard built with React and TypeScript. It uses simulated live telemetry to demonstrate KPI monitoring, interactive charts, operational alerts, filtering, state management, and automated component testing.</p>

            <div class="project-tech" aria-label="Technology stack">
              <span>React</span><span>TypeScript</span><span>Redux Toolkit</span><span>React Query</span><span>Material UI</span><span>Recharts</span><span>Jest</span>
            </div>

            <div class="project-highlights">
              <strong>Highlights</strong>
              <ul>
                <li>Simulated live data updates and operational event monitoring</li>
                <li>Interactive KPI cards, charts, filters, and threshold alerts</li>
                <li>Responsive interface with loading, error, and empty states</li>
                <li>Production build and Jest / React Testing Library validation</li>
              </ul>
            </div>

            <div class="project-actions">
              <a class="project-button project-button-primary" href="{{ "/projects/real-time-mission-analytics/" | relative_url }}">Open Live Demo</a>
              <a class="project-button" href="https://github.com/erofeher/erofeher.github.io/tree/main/source-projects/real-time-mission-analytics" target="_blank" rel="noopener">View Source</a>
            </div>
          </div>
        </article>
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
