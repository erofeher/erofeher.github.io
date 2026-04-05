---
layout: default
title: AI in Technical Writing
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">

    <main class="content-column">

      <span class="section-kicker">Workflow</span>

      <h1 class="hero-section-title">
        AI in Technical Writing
      </h1>

      <p>
Modern technical writing is increasingly powered by AI-assisted workflows that improve speed, consistency, and collaboration across engineering and product teams.
      </p>

      <p class="about-text">
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

          <div class="flow-steps">
            <div class="flow-step">
              <h3>Documentation Delivery &amp; Requirements Using Jira &amp; Confluence</h3>
              <ul>
                <li>Managing requirements, epics, and user stories in <strong>Jira</strong>.</li>
                <li>Reviewing HLDs and technical specifications in <strong>Confluence</strong>.</li>
                <li>Gathering all relevant product and engineering context before writing.</li>
                <li>Aligning documentation with the product development lifecycle.</li>
              </ul>
            </div>

            <div class="flow-step">
              <h3>Integration with Engineering Workflow Using Atlassian MCP Server</h3>
              <ul>
                <li>Fetch requirements from <strong>Jira</strong>.</li>
                <li>Access and update documentation in <strong>Confluence</strong>.</li>
                <li>Integrate documentation into real engineering workflows.</li>
                <li>Align documentation with the product development lifecycle.</li>
              </ul>
            </div>

            <div class="flow-step">
              <h3>Drafting Using VSCode and GitHub Copilot</h3>
              <ul>
                <li>Writing documentation in <strong>Markdown using VSCode</strong>.</li>
                <li>
                  Using <strong>GitHub Copilot</strong> to:
                  <ul>
                    <li>generate documentation from code context.</li>
                    <li>suggest API descriptions and usage examples.</li>
                    <li>accelerate initial drafts based on requirements and technical inputs.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="flow-step">
              <h3>Content Refinement Using ChatGPT (Organizational Access)</h3>
              <ul>
                <li>Improve clarity and readability.</li>
                <li>Restructure complex technical content.</li>
                <li>Adapt tone for different audiences (developers vs end-users).</li>
                <li>Ensure consistency across documentation.</li>
              </ul>
            </div>

            <div class="flow-step">
              <h3>Quality & Standards Using Vale</h3>
              <ul>
                <li>Using <strong>Vale</strong> to enforce documentation quality:
                <ul>
                    <li>style guide validation.</li>
                    <li>terminology consistency.</li>
                    <li>grammar and readability checks.</li>
                  </ul>
                </li>
                <li>Automating content validation across documentation sets.</li>
                <li>Adapt tone for different audiences (developers vs end-users).</li>
                <li>Ensuring scalable and maintainable documentation standards.</li>
              </ul>
            </div>        
          </div>
        </section>

        <section class="subpage-card">
          <h2>Key Capabilities</h2>
          <li>AI-assisted documentation using GitHub Copilot and ChatGPT.</li>
          <li>Documentation-as-Code workflows (Markdown + Git).</li>
          <li>Automated quality enforcement with Vale.</li>
          <li>Integration with Jira and Confluence via MCP Server.</li>
          <li>End-to-end documentation lifecycle aligned with product development.</li>
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
