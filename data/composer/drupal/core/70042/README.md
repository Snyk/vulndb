# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Open Redirect.

Open redirect vulnerability in the drupal_goto function in Drupal 6.x before 6.38, when used with PHP before 5.4.7, allows remote attackers to redirect users to arbitrary web sites and conduct phishing attacks via a double-encoded URL in the "destination" parameter.

## Remediation
Upgrade `drupal/core` to version 6.38 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
