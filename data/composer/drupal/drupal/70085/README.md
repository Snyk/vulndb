# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Access Restriction Bypass.

When adding a private file via the editor in Drupal 8.2.x before 8.2.7, the editor will not correctly check access for the file being attached, resulting in an access bypass.

## Remediation
Upgrade `drupal/drupal` to version 8.2.7 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/forum/newsletters/security-advisories-for-drupal-core/2017-03-15/drupal-core-multiple)
