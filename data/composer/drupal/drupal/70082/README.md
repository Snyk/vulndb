# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Information Exposure.

The taxonomy module in Drupal 7.x before 7.52 and 8.x before 8.2.3 might allow remote authenticated users to obtain sensitive information about taxonomy terms by leveraging inconsistent naming of access query tags.

## Remediation
Upgrade `drupal/drupal` to version 8.2.3 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/forum/newsletters/security-advisories-for-drupal-core/2016-11-16/drupal-core-moderately-critical)
