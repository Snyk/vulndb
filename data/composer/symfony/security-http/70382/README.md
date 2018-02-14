# Overview
Affected versions of [`symfony/security-http`](https://packagist.org/packages/symfony/security-http) are vulnerable to Open Redirect.

`DefaultAuthenticationSuccessHandler` or `DefaultAuthenticationFailureHandler` take the content of the `_target_path` parameter and generate a redirect response but no check is performed on the path, which could be an absolute URL to an external domain, opening redirect vulnerability.

## Remediation
Upgrade `symfony/security-http` to versions 2.7.38, 2.8.31, 3.1.0, 3.2.0, 3.2.14, 3.3.13 higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2017-16652-open-redirect-vulnerability-on-security-handlers)
- [GitHub PR](https://github.com/symfony/symfony/pull/24995)
