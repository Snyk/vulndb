# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Access bypass.

Drupal 8 before 8.2.8 and 8.3 before 8.3.1 allows critical access bypass by authenticated users if the RESTful Web Services (rest) module is enabled and the site allows PATCH requests.

## Remediation
Upgrade `drupal/core` to version 8.3.1, 8.2.8 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/forum/newsletters/security-advisories-for-drupal-core/2017-04-19/drupal-core-critical-access-bypass)
