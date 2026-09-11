---
layout: default
title: Preparing the Configuration Files
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column" style="max-width: 1000px; margin: 0 auto;">
      <div class="subpage-card" style="max-width: 100%;" markdown="1">

# Preparing the Configuration Files

[← Back to Table of Contents](index.html)

---

The installer reads its settings from a set of `.conf` files located in the `conf` folder
of the installation package. This chapter describes how to prepare those files before
running the installer.

## To prepare the configuration files:

1. Extract the installation package to a local working folder, for example
   `/opt/contoso/installer`.
2. Navigate to the `conf` subfolder.
3. Make a backup copy of the default configuration files before editing them.
4. Open `contoso.conf` in a text editor and update the environment-specific values, as
   described in [Configuring the Application](08-configuring-the-application.html).
5. Encrypt any plain-text passwords in the configuration files (see below) before saving.

## Encrypting Stored Passwords

Storing plain-text passwords in configuration files is not recommended. The installer
includes a utility to encrypt sensitive values before they are saved to disk.

```
contoso-cli encrypt-password --input "<plain-text-password>"
```

The command returns an encrypted string that can be pasted into the relevant `.conf`
parameter, for example:

```
contoso.db.app-user.password = ENC(8f3a1c9e7b2d4f6a...)
```

> **Note:** The example encrypted value above is illustrative only and does not represent
> a real credential or a real encryption algorithm output.

## Saving a Backup of the Installer

After the configuration files are complete, make a copy of the entire installer folder
(including the edited `conf` files) and store it in your organization's standard
configuration-management location. This makes it easier to repeat or audit the
installation later.

---

[← Previous: Prerequisites and Preparation](06-prerequisites.html) | [Next: Configuring the Application →](08-configuring-the-application.html)

</div>
</main>
</div>
</section>
