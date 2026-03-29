---
layout: default
title: Contact
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <div class="subpage-grid">
      <aside class="profile-column">
        <div class="profile-photo-wrap">
          <div class="profile-photo"></div>
          <div class="photo-badge">✉</div>
        </div>
        <p class="profile-name-main">Erik Feher</p>
        <p class="profile-name-alt">EF</p>
        <p class="profile-role">Let’s Talk</p>
        <p class="profile-org">Available for roles</p>
      </aside>

      <main class="content-column">
        <span class="section-kicker">Contact</span>
        <h1 class="hero-section-title">Contact</h1>
        <p class="about-text">Use this page for your main contact details and a short call to action. Keep it simple and make the next step obvious.</p>

        <div class="subpage-stack">
          <section class="subpage-list">
            <h2>Contact Details</h2>
            <ul>
              <li>Email: <a class="text-link" href="mailto:your@email.com">your@email.com</a></li>
              <li>LinkedIn: <a class="text-link" href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></li>
              <li>GitHub: <a class="text-link" href="https://github.com/yourusername">github.com/yourusername</a></li>
            </ul>
          </section>

          <section class="subpage-card">
            <h2>Availability</h2>
            <p>Add one short paragraph here about the kinds of roles, freelance projects, or collaborations you are open to.</p>
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
