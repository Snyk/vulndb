# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Access Restriction Bypass.

Symfony before 2.8.6 and 3.x before 3.0.6 allows remote attackers to bypass authentication by logging in with an empty password and valid username, which triggers an unauthenticated bind.

## Remediation
Upgrade `symfony/symfony` to version 3.0.6, 2.8.6 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2016-2403-unauthorized-access-on-a-misconfigured-ldap-server-when-using-an-empty-password)
