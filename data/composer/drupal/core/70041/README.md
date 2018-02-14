# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to HTTP Header Injection.

CRLF injection vulnerability in the drupal_set_header function in Drupal 6.x before 6.38, when used with PHP before 5.1.2, allows remote attackers to inject arbitrary HTTP headers and conduct HTTP response splitting attacks by leveraging a module that allows user-submitted data to appear in HTTP headers.

## Remediation
Upgrade `drupal/core` to version 6ץ38 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
