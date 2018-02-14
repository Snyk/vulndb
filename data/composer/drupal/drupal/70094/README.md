# Overview
Affected versions of [`drupal/drupal`](https://packagist.org/packages/drupal/drupal) are vulnerable to Access Restriction Bypass.

There is a vulnerability in the entity access system that could allow unwanted access to view, create, update, or delete entities. This only affects entities that do not use or do not have UUIDs, and entities that have different access restrictions on different revisions of the same entity.

## Remediation
Upgrade `drupal/drupal` to version 8.3.7 or higher.

## References
- [Drupal Security Advisory](https://www.drupal.org/SA-CORE-2017-004)
