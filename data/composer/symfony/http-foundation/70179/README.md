# Overview
Affected versions of [`symfony/http-foundation`](https://packagist.org/packages/symfony/http-foundation) are vulnerable to Authentication Bypass.

When an application uses an HTTP basic or digest authentication, Symfony does not parse the Authorization header properly, which could be exploited in some server setups (no exploits have been demonstrated though.)

## Remediation
Upgrade `symfony/http-foundation` to version 2.3.19, 2.2.0, 2.4.9, 2.5.4, 2.3.0, 2.1.0 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2014-6061-security-issue-when-parsing-the-authorization-header)
- [GitHub Issue](https://github.com/symfony/symfony/pull/11829)
