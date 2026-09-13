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
        <p>My documentation stack combines docs-as-code, knowledge base platforms, collaboration tools, AI-assisted workflows, and multimedia tools to create, maintain, and deliver clear technical content efficiently.</p>

        <div class="subpage-stack">
          <section class="subpage-list">
            <h2>Documentation Toolset</h2>
            <ul>
              <li>Markdown and docs-as-code workflows</li>
              <li>GitHub, Git, and pull-request reviews</li>
              <li>VS Code, Vale, and editorial QA tooling</li>
              <li>MadCap Flare for structured authoring and publishing</li>
              <li>Zendesk and Intercom for knowledge base and help center content</li>
              <li>Camtasia for video tutorials and training content</li>
              <li>Jira and Confluence for planning and collaboration</li>
              <li>ChatGPT and Copilot for AI-assisted drafting</li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>Preferred Setup</h2>

            <div class="flow-steps">
              <div class="flow-step">
                <h3>Docs-as-Code Workflow</h3>
                <p>I prefer a docs-as-code workflow that combines <strong>VS Code, Markdown, GitHub/GitLab, and Git</strong> for structured, version-controlled documentation. For larger documentation projects and structured publishing, I also work with <strong>MadCap Flare</strong>.</p>
              </div>

              <div class="flow-step">
                <h3>Knowledge Base, Collaboration &amp; Training</h3>
                <p>For knowledge base publishing, I currently work with <strong>Fluid Topics</strong>. I also have hands-on experience with <strong>Zendesk and Intercom</strong> for knowledge base management, help center content, and user-facing support content. <strong>Camtasia</strong> supports video tutorials and training materials, while <strong>Jira and Confluence</strong> are part of my planning and collaboration workflow.</p>
              </div>

              <div class="flow-step">
                <h3>AI-Assisted Documentation</h3>
                <p>AI is integrated into my documentation workflow through <strong>ChatGPT and GitHub Copilot</strong>, which I use to support drafting, rewriting, content structuring, terminology consistency, and documentation QA. The final content is always reviewed and validated against product requirements and source information.</p>
              </div>
            </div>
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
      localStorage.setItem('portfolio-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  });
</script>
