# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Cache Poisoning.

The user password reset form does not specify a proper cache context, which can lead to cache poisoning and unwanted content on the page.

## Remediation
Upgrade `drupal/core` to version 8.2.3 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/forum/newsletters/security-advisories-for-drupal-core/2016-11-16/drupal-core-moderately-critical)
