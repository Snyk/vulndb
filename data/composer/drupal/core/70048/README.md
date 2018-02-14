# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Privilege Escalation.

The User module in Drupal 7.x before 7.44 allows remote authenticated users to gain privileges via vectors involving contributed or custom code that triggers a rebuild of the user profile form.

## Remediation
Upgrade `drupal/core` to version 7.44 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-002)
