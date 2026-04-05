---
layout: default
title: What I Do Best
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">

      <main class="content-column">
        <span class="section-kicker">Strengths</span>
        <h1 class="hero-section-title">What I Do Best</h1>
        <p>Use this page to present the specific types of documentation work you do best and the business problems you solve through writing, structure, and content design.</p>

        <div class="subpage-stack">
          <section class="subpage-list">
            <h2>Specialties</h2>
            <ul>
              <li>API documentation</li>
              <li>Developer guides and onboarding flows</li>
              <li>Information architecture</li>
              <li>Help center and knowledge base design</li>
              <li>Internal enablement and process documentation</li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>What Sets You Apart</h2>
            <p>Add a short paragraph about your strongest differentiators: clarity, speed, systems thinking, collaboration with engineering, or AI-assisted writing maturity.</p>
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
