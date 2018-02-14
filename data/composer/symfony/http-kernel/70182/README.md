# Overview
Affected versions of [`symfony/http-kernel`](https://packagist.org/packages/symfony/http-kernel) are vulnerable to Arbitrary Code Injection.

Eval injection vulnerability in the HttpCache class in HttpKernel in Symfony 2.x before 2.3.27, 2.4.x and 2.5.x before 2.5.11, and 2.6.x before 2.6.6 allows remote attackers to execute arbitrary PHP code via a `language="php"` attribute of a SCRIPT element.

## Remediation
Upgrade `symfony/http-kernel` to version 2.3.27, 2.6.6, 2.2.0, 2.5.0, 2.5.11, 2.3.0, 2.1.0 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2015-2308-esi-code-injection)
