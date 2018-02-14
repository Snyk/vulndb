# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Information Exposure.

The "have you forgotten your password" links in the User module in Drupal 7.x before 7.43 and 8.x before 8.0.4 allow remote attackers to obtain sensitive username information by leveraging a configuration that permits using an email address to login and a module that permits logging in.


## Remediation
Upgrade `drupal/drupal` to version 7.43, 8.0.4 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
