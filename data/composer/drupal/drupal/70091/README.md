# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Information Exposure.

Private files that have been uploaded by an anonymous user but not permanently attached to content on the site should only be visible to the anonymous user that uploaded them, rather than all anonymous users. Drupal core did not previously provide this protection, allowing an access bypass vulnerability to occur. This issue is mitigated by the fact that in order to be affected, the site must allow anonymous users to upload files into a private file system.

## Remediation
Upgrade `drupal/drupal` to version 7.56, 8.3.4 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2017-003)
