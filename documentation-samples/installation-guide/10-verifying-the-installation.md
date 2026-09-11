---
layout: default
title: Verifying the Installation
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column" style="max-width: 1000px; margin: 0 auto;">
      <div class="subpage-card" style="max-width: 100%;" markdown="1">

# Verifying the Installation

[← Back to Table of Contents](index.html)

---

After the installer completes, use the checklist in this chapter to confirm that the
Contoso Platform was installed correctly.

## Verification Checklist

| # | Check | How to Verify |
|---|---|---|
| 1 | Application service is running | Run `contoso-cli status` and confirm the application server reports `RUNNING`. |
| 2 | Database schema was created | Connect to the database and confirm that the `contoso_app` schema contains the expected tables. |
| 3 | Message broker queues were created | Open the broker's management console and confirm that queues with the `contoso.` prefix exist. |
| 4 | Web client is reachable | Open a browser and navigate to `https://<server-hostname>:8443`. Confirm that the login page loads. |
| 5 | Sample login succeeds | Log in using the default administrator account created by the installer, and confirm access to the main dashboard. |
| 6 | Log files show no errors | Review `install.log` and the application server log for `ERROR` entries. |

## If Something Fails

- Re-run the specific installer task that failed (see
  [Running the Installer](09-running-the-installer.html)).
- Confirm that the values in `contoso.conf` match your environment (see
  [Configuring the Application](08-configuring-the-application.html)).
- Confirm that all prerequisite software versions match the requirements in
  [Prerequisites and Preparation](06-prerequisites.html).

> **Tip:** Keep the installer log files from a successful installation. They are useful
> as a reference the next time you perform an upgrade or troubleshoot an issue.

---

This concludes the Contoso Platform Installation Guide sample template.

[← Previous: Running the Installer](09-running-the-installer.html) | [Back to Table of Contents](index.html)

      </div>
    </main>
  </div>
</section>
