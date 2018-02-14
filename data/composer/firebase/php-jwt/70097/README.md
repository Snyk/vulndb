# Overview
Affected versions of [`firebase/php-jwt`](https://packagist.org/packages/firebase/php-jwt) are vulnerable to Authentication Bypass.
It treated tokens signed with the `none` algorithm as a valid token with a verified signature and resulted in giving attackers arbitrary account access.

## Remediation
Upgrade `firebase/php-jwt` to version 2.0.0 or higher.

## References
- [Auth0 Blog](https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/)
