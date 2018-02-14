# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Deserialization of Untrusted Data.

PECL YAML parser does not handle PHP objects safely during certain operations within Drupal core. This could lead to remote code execution.

## Remediation
Upgrade `drupal/core` to version 8.3.4 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2017-003)
