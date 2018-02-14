# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Authentication Bypass.

When creating a view, you can optionally use Ajax to update the displayed data via filter parameters. The views subsystem/module did not restrict access to the Ajax endpoint to only views configured to use Ajax. This is mitigated if you have access restrictions on the view.

## Remediation
Upgrade `drupal/drupal` to version 8.3.7 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2017-004)
