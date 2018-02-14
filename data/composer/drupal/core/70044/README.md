# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Privilege Escalation.

The User module in Drupal 6.x before 6.38 and 7.x before 7.43 allows remote attackers to gain privileges by leveraging contributed or custom code that calls the user_save function with an explicit category and loads all roles into the array.

## Remediation
Upgrade `drupal/core` to version 6.38, 7.43 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
