---
layout: default
title: How I Work
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">

      <main class="content-column">
        <span class="section-kicker">Process</span>
        <h1 class="hero-section-title">How I Work</h1>
        <p>I create technical documentation that is clear, structured, and practical. My goal is to help users find the information they need quickly, whether they are developers, end users, or support teams.</p>

        <p>My approach combines structured writing principles, close collaboration with engineering teams, and modern AI-assisted workflows to deliver scalable and high-quality documentation.</p>

        <div class="subpage-stack">
         <section class="subpage-list">
          <p>My documentation process uses the following core principles:</p>

          <div class="flow-steps">
            <div class="flow-step">
              <h3>Audience-Focused Writing</h3>
              <ul>
                <li>Developers need accurate API references and implementation details.</li>
                <li>End users need guided steps and task-based documentation.</li>
                <li>Support teams need troubleshooting content with actionable resolutions.</li>
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
            <h2>Documentation Workflow</h2>
            <p>This workflow reflects how I approach documentation delivery:</p>
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
