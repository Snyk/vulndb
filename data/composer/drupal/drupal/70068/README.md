# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Open Redirect.

Drupal 6.x before 6.38, 7.x before 7.43, and 8.x before 8.0.4 might allow remote attackers to conduct open redirect attacks by leveraging (1) custom code or (2) a form shown on a 404 error page, related to path manipulation.

## Remediation
Upgrade `drupal/drupal` to version 6.38, 7.43, 8.0.4 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
