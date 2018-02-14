# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Information Exposure.

The Views module 7.x-3.x before 7.x-3.14 in Drupal 7.x and the Views module in Drupal 8.x before 8.1.3 might allow remote authenticated users to bypass intended access restrictions and obtain sensitive Statistics information via unspecified vectors.

## Remediation
Upgrade `drupal/core` to version 8.1.3 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-002)
