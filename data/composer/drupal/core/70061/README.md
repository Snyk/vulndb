# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Arbitrary File Upload.

The file REST resource does not properly validate some fields when manipulating files. A site is only affected by this if the site has the RESTful Web Services (rest) module enabled, the file REST resource is enabled and allows PATCH requests, and an attacker can get or register a user account on the site with permissions to upload files and to modify the file resource.

## Remediation
Upgrade `drupal/core` to version 8.3.4 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2017-003)
