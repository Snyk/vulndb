# Overview
Affected versions of [`drupal/core`](https://packagist.org/packages/drupal/core) are vulnerable to Brute force amplification attacks via XML-RPC.

The XML-RPC system allows a large number of calls to the same method to be made at once, which can be used as an enabling factor in brute force attacks (for example, attempting to determine user passwords by submitting a large number of password variations at once).

## Remediation
Upgrade `drupal/core` to version 6.38, 7.43 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
