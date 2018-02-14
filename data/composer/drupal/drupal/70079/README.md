# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Access Restriction Bypass.

Users who have rights to edit a node, can set the visibility on comments for that node. This should be restricted to those who have the administer comments permission.

## Remediation
Upgrade `drupal/drupal` to version 8.1.10 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/forum/newsletters/security-advisories-for-drupal-core/2016-09-21/drupal-core-critical-multiple)
