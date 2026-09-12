---
layout: default
title: "Prepare the configuration files"
---

<section class="hero-stage">
<div class="subpage-shell">
<main class="content-column">
<div class="subpage-card" markdown="1">

# Prepare the configuration files

[← Back to table of contents](index.html)

---

The installer reads its settings from a set of `.conf` files in the `conf` folder of
the installation package. This topic describes how to prepare those files before you
run the installer.

## Prepare the configuration files

1. Extract the installation package to a local working folder, such as
   `/opt/contoso/installer`.
2. Go to the `conf` subfolder.
3. Back up the default configuration files before you edit them.
4. Open `contoso.conf` in a text editor and update the environment-specific values. See
   [Configure the application](08-configuring-the-application.html).
5. Encrypt any plain-text passwords in the configuration files before you save them.

## Encrypt stored passwords

Storing plain-text passwords in configuration files isn't recommended. The installer
includes a utility to encrypt sensitive values before they're saved to disk.

```
contoso-cli encrypt-password --input "<plain-text-password>"
```

The command returns an encrypted string that you can paste into the relevant `.conf`
parameter, for example:

```
contoso.db.app-user.password = ENC(8f3a1c9e7b2d4f6a...)
```

> **Note:** The example encrypted value above is illustrative only. It doesn't
> represent a real credential or real encryption algorithm output.

## Save a backup of the installer

After your configuration files are complete, copy the entire installer folder,
including the edited `conf` files, and store it in your organization's standard
configuration-management location. This makes it easier to repeat or audit the
installation later.

---

[← Previous: Prerequisites and preparation](06-prerequisites.html) | [Next: Configure the application →](08-configuring-the-application.html)

</div>
</main>
</div>
</section>
