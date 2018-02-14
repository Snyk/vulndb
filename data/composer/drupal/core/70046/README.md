# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Deserialization of Untrusted Data.

Drupal 6.x before 6.38, when used with PHP before 5.4.45, 5.5.x before 5.5.29, or 5.6.x before 5.6.13, might allow remote attackers to execute arbitrary code via vectors related to session data truncation.

## Remediation
Upgrade `drupal/core` to version 6.38 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
