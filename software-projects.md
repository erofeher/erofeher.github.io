---
layout: default
title: Software Samples
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<style>
  /* Software Projects: compact, high-contrast action buttons */
  .project-tech span {
    color: #55b8ff;
    font-weight: 700;
  }

  .project-tech b {
    display: inline-block;
    margin: 0 8px;
    color: rgba(255, 255, 255, .72);
    font-weight: 700;
  }

  .project-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 16px;
  }

  /* Clear separation between Software Samples */
  .software-project-card + .software-project-card {
    margin-top: 42px;
    padding-top: 34px;
    border-top: 1px solid rgba(255, 255, 255, .18);
  }

  .project-actions .project-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 42px;
    padding: 9px 18px;
    border: 2px solid #32a8ff;
    border-radius: 9px;
    color: #55b8ff !important;
    font-size: 15px;
    font-weight: 700;
    line-height: 1;
    text-decoration: none !important;
    transition: transform .15s ease, background-color .15s ease, border-color .15s ease;
  }

  .project-actions .project-button-primary {
    background: #168cff;
    border-color: #45b4ff;
    color: #ffffff !important;
    box-shadow: 0 0 14px rgba(22, 140, 255, .24);
  }

  .project-actions .project-button:hover {
    transform: translateY(-1px);
    border-color: #78caff;
    color: #78caff !important;
  }

  .project-actions .project-button-primary:hover {
    background: #299cff;
    color: #ffffff !important;
  }

  @media (max-width: 600px) {
    .project-actions .project-button {
      padding: 9px 15px;
      font-size: 14px;
    }
  }
</style>

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column">
      <span class="section-kicker">Development Portfolio</span>
      <h1 class="hero-section-title">Software Samples</h1>
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
              <span>React</span><b>•</b><span>TypeScript</span><b>•</b><span>Redux Toolkit</span><b>•</b><span>React Query</span><b>•</b><span>Material UI</span><b>•</b><span>Recharts</span><b>•</b><span>Jest</span>
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
            <h2>Knowledge Base Analytics Dashboard</h2>
            <p>A responsive knowledge-base analytics dashboard for monitoring content performance, publishing health, search success, and article lifecycle. It demonstrates REST-style data access, interactive analytics, search, combined filtering, and automated component testing.</p>

            <div class="project-tech" aria-label="Technology stack">
              <span>React</span><b>•</b><span>TypeScript</span><b>•</b><span>React Query</span><b>•</b><span>Axios</span><b>•</b><span>Material UI</span><b>•</b><span>Recharts</span><b>•</b><span>Jest</span>
            </div>

            <div class="project-highlights">
              <strong>Highlights</strong>
              <ul>
                <li>Knowledge-base KPIs, content health, and article lifecycle analytics</li>
                <li>Article search with combined status and category filtering</li>
                <li>Interactive performance and content-status visualizations</li>
                <li>Responsive UI with loading, error, empty states, and automated testing</li>
              </ul>
            </div>

            <div class="project-actions">
              <a class="project-button project-button-primary" href="{{ "/projects/knowledge-base-analytics/" | relative_url }}">Open Live Demo</a>
              <a class="project-button" href="https://github.com/erofeher/erofeher.github.io/tree/main/source-projects/knowledge-base-analytics" target="_blank" rel="noopener">View Source</a>
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
