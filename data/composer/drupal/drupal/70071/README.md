# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Open Redirect via double-encoded 'destination' parameter.

Open redirect vulnerability in the drupal_goto function in Drupal 6.x before 6.38, when used with PHP before 5.4.7, allows remote attackers to redirect users to arbitrary web sites and conduct phishing attacks via a double-encoded URL in the "destination" parameter.

## Remediation
Upgrade `drupal/drupal` to version 6.38 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
