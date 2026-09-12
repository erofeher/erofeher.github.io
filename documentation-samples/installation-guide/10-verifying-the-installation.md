---
layout: default
title: "Verify the installation"
---

<section class="hero-stage">
<div class="subpage-shell">
<main class="content-column">
<div class="subpage-card" markdown="1">

# Verify the installation

[← Back to table of contents](index.html)

---

After the installer completes, use the checklist in this topic to confirm that the
Contoso Platform installed correctly.

## Verification checklist

| # | Check | How to verify |
|---|---|---|
| 1 | Application service is running | Run `contoso-cli status` and confirm that the application server reports `RUNNING`. |
| 2 | Database schema was created | Connect to the database and confirm that the `contoso_app` schema contains the expected tables. |
| 3 | Message broker queues were created | Open the broker's management console and confirm that queues with the `contoso.` prefix exist. |
| 4 | Web client is reachable | Open a browser and go to `https://<server-hostname>:8443`. Confirm that the login page loads. |
| 5 | Sample login succeeds | Log in with the default administrator account the installer created, and confirm access to the main dashboard. |
| 6 | Log files show no errors | Review `install.log` and the application server log for `ERROR` entries. |

## If something fails

- Rerun the specific installer task that failed. See
  [Run the installer](09-running-the-installer.html).
- Confirm that the values in `contoso.conf` match your environment. See
  [Configure the application](08-configuring-the-application.html).
- Confirm that all prerequisite software versions match the requirements in
  [Prerequisites and preparation](06-prerequisites.html).

> **Tip:** Keep the installer log files from a successful installation. They're useful
> as a reference the next time you perform an upgrade or troubleshoot an issue.

---

You've completed the Contoso Platform Installation Guide sample template.

[← Previous: Run the installer](09-running-the-installer.html) | [Back to table of contents](index.html)

</div>
</main>
</div>
</section>
