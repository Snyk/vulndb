# Overview
Affected versions of [`symfony/security-http`](https://packagist.org/packages/symfony/security-http) are vulnerable to Denial of Service (DoS).

The attemptAuthentication function in Component/Security/Http/Firewall/UsernamePasswordFormAuthenticationListener.php in Symfony before 2.3.41, 2.7.x before 2.7.13, 2.8.x before 2.8.6, and 3.0.x before 3.0.6 does not limit the length of a username stored in a session, which allows remote attackers to cause a denial of service (session storage consumption) via a series of authentication attempts with long, non-existent usernames.

## Remediation
Upgrade `symfony/security-http` to version 2.3.41, 2.7.0, 2.5.0, 2.7.13, 2.6.0, 2.8.6, 3.0.6 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2016-4423-large-username-storage-in-session)
- [GitHub PR](https://github.com/symfony/symfony/pull/18733)
