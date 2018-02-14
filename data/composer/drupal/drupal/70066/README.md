# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Denial of Service (DoS).

The File module in Drupal 7.x before 7.43 and 8.x before 8.0.4 allows remote authenticated users to bypass access restrictions and read, delete, or substitute a link to a file uploaded to an unprocessed form by leveraging permission to create content or comment and upload files.

## Remediation
Upgrade `drupal/drupal` to version 7.43, 8.0.4 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2016-001)
