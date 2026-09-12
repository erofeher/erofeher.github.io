---
layout: default
title: "Run the installer"
---

<section class="hero-stage">
<div class="subpage-shell">
<main class="content-column">
<div class="subpage-card" markdown="1">

# Run the installer

[← Back to table of contents](index.html)

---

After your configuration files are ready, run the installer to deploy the database
schema and application components.

## Run the installer from the command line

1. Open a terminal on the target server and go to the installer folder.
2. Run the installer in unattended mode, pointing it to the prepared configuration
   file:

   ```
   ./contoso-installer --conf ./conf/contoso.conf --mode install
   ```

3. Monitor the console output, or the generated log file (`install.log`), for errors.
4. When the installer finishes, it prints a summary of the tasks it completed and any
   it skipped.

## Run specific tasks only

The installer also supports running a single task, which is useful when you repeat a
step after fixing a configuration issue:

```
./contoso-installer --conf ./conf/contoso.conf --task create-database-schema
```

| Task name | Description |
|---|---|
| `create-database-schema` | Creates the application database schema, tables, and indexes. |
| `create-database-users` | Creates the database users and roles the application uses. |
| `deploy-application` | Copies the application binaries to the target server and registers the service. |
| `configure-message-broker` | Creates the queues and exchanges the message broker uses. |

> **Note:** Always back up the database before you rerun a task in an existing
> environment.

## Considerations for upgrades

When you upgrade an existing installation, run the installer with `--mode upgrade`
instead of `--mode install`. This preserves existing data and applies only the schema
changes the new version requires.

---

[← Previous: Configure the application](08-configuring-the-application.html) | [Next: Verify the installation →](10-verifying-the-installation.html)

</div>
</main>
</div>
</section>
