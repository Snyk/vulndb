# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Cross-site Request Forgery (CSRF).

The implementation of CSRF protection did not use different tokens for HTTP and HTTPS, therefore the token was subject to MITM attacks on HTTP and could then be used in HTTPS context to do CSRF attacks.

## Remediation
Upgrade `symfony/symfony` to versions 2.7.38, 2.8.31, 3.1.0, 3.2.0, 3.2.14, 3.3.13 higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2017-16653-csrf-protection-does-not-use-different-tokens-for-http-and-https)
- [GitHub PR](https://github.com/symfony/symfony/pull/24992)
