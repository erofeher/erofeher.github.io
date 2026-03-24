# Troubleshooting Guide Sample – Common Access Issues

## Overview

This page provides troubleshooting steps for common user access issues in a SaaS platform.

## Issue: User cannot sign in

### Possible causes

- Incorrect password
- Expired session
- User account is locked

### Resolution

1. Confirm the email address and password.
2. Reset the password.
3. Clear browser cache and cookies.
4. Contact support if the issue persists.

## Issue: User does not see assigned project

### Possible causes

- Missing role assignment
- Project visibility is restricted
- Invitation was not accepted

### Resolution

1. Verify that the user was added to the project.
2. Check the assigned role and permissions.
3. Ask the user to accept the invitation email.
4. Refresh the application and sign in again.

## Issue: API token is rejected

### Possible causes

- Token has expired
- Token was copied incorrectly
- Request uses the wrong authentication format

### Resolution

1. Generate a new API token.
2. Confirm the header format:

```http
Authorization: Bearer YOUR_API_TOKEN
```

3. Retry the request.
4. Confirm that the token has access to the required scope.
