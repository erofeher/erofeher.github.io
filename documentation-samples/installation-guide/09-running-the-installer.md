---
layout: default
title: Running the Installer
---

<link rel="stylesheet" href="{{ "/assets/style.css" | relative_url }}">

<section class="hero-stage">
  <div class="subpage-shell wrapper">
    <main class="content-column" style="max-width: 1000px; margin: 0 auto;">
      <div class="subpage-card" style="max-width: 100%;" markdown="1">

# Running the Installer

[← Back to Table of Contents](index.html)

---

Once the configuration files are ready, run the installer to deploy the database schema
and application components.

## To run the installer from the command line:

1. Open a terminal on the target server and navigate to the installer folder.
2. Run the installer in unattended mode, pointing it to the prepared configuration file:

   ```
   ./contoso-installer --conf ./conf/contoso.conf --mode install
   ```

3. Monitor the console output, or the generated log file (`install.log`), for errors.
4. When the installer finishes, it prints a summary of the tasks that were completed and
   any that were skipped.

## Running Specific Tasks Only

The installer also supports running a single task, which is useful when repeating a step
after fixing a configuration issue:

```
./contoso-installer --conf ./conf/contoso.conf --task create-database-schema
```

| Task Name | Description |
|---|---|
| `create-database-schema` | Creates the application database schema, tables, and indexes. |
| `create-database-users` | Creates the database users and roles used by the application. |
| `deploy-application` | Copies the application binaries to the target server and registers the service. |
| `configure-message-broker` | Creates the queues and exchanges used by the message broker. |

> **Note:** Always take a backup of the database before re-running a task in an existing
> environment.

## Considerations for Upgrades

When upgrading an existing installation, run the installer with `--mode upgrade` instead
of `--mode install`. This preserves existing data and only applies the schema changes
required for the new version.

---

[← Previous: Configuring the Application](08-configuring-the-application.html) | [Next: Verifying the Installation →](10-verifying-the-installation.html)

</div>
</main>
</div>
</section>
