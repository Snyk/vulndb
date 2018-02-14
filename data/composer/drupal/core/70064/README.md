# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Access Restriction Bypass.

When using the REST API, users without the correct permission can post comments via REST that are approved even if the user does not have permission to post approved comments.

## Remediation
Upgrade `drupal/core` to version 8.3.7 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2017-004)
