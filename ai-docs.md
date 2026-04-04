---
layout: default
title: AI in Technical Writing
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">

    <main class="content-column" style="max-width: 900px; margin: 0 auto;">

      <span class="section-kicker">Workflow</span>

      <h1 class="hero-section-title">
        AI in Technical Writing
      </h1>

      <p class="about-text">
Modern technical writing is increasingly powered by AI-assisted workflows that improve speed, consistency, and collaboration across engineering and product teams.

I use a structured AI-driven approach that combines developer tools, language models, and automated quality checks to produce high-quality, scalable documentation.
      </p>

      <div class="subpage-stack">

        <section class="subpage-card">
          <img src="{{ "/images/ai_workflow_diagram.png" | relative_url }}"
               alt="AI Workflow"
               style="width:100%; border-radius:12px;">
        </section>

        <section class="subpage-list">
          <p>My documentation process follows a structured flow combining multiple AI tools:</p>
          
          <h3>1. Documentation Delivery & Requirements Using Jira & Confluence</h3>
          <ul>
            <li>Managing requirements, epics, and user stories in <strong>Jira</strong>.</li>
            <li>Reviewing HLDs and technical specifications in <strong>Confluence</strong>.</li>
            <li>Gathering all relevant product and engineering context before writing.</li>
            <li>Aligning documentation with the product development lifecycle.</li>
          
          </ul>
          <br>
          <h3>2. Integration with Engineering Workflow Using Atlassian MCP Server</h3>
          <ul>
            <li>Fetch requirements from <strong>Jira</strong>.</li>
            <li>Access and update documentation in <strong>Confluence</strong>.</li>
            <li>Integrate documentation into real engineering workflows.</li>
            <li>Aligning documentation with the product development lifecycle.</li>
          </ul>

           </ul>
          <br>
          <h3>3. Drafting Using VSCode and GitHub Copilot</h3>
          <ul>
            <li>Writing documentation in <strong>Markdown using VSCode</strong>.</li>
            <li>Using <strong>GitHub Copilot</strong> to:</li>
            <li>- generate documentation from code context.</li>
            <li>- suggest API descriptions and usage examples.</li>
            <li>- accelerate initial drafts based on requirements and technical inputs.</li>
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
</section>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;

    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark') document.body.classList.add('dark-mode');

    button.addEventListener('click', function () {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem(
        'portfolio-theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light'
      );
    });
  });
</script>
