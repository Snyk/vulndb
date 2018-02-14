# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Access Restriction Bypass.

The Form API in Drupal 6.x before 6.38 ignores access restrictions on submit buttons, which might allow remote attackers to bypass intended access restrictions by leveraging permission to submit a form with a button that has "#access" set to FALSE in the server-side form definition.

## Remediation
Upgrade `drupal/core` to version 6ץ38 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
