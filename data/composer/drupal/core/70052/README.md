# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Access Restriction Bypass.

The system.temporary route in Drupal 8.x before 8.1.10 does not properly check for "Export configuration" permission, which allows remote authenticated users to bypass intended access restrictions and read a full config export via unspecified vectors.

## Remediation
Upgrade `drupal/core` to version 8.1.10 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/forum/newsletters/security-advisories-for-drupal-core/2016-09-21/drupal-core-critical-multiple)
