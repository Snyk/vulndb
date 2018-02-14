# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Arbitrary Code Execution.

Symfony 2.0.x before 2.0.22, 2.1.x before 2.1.7, and 2.2.x remote attackers to execute arbitrary PHP code via a serialized PHP object to the (1) Yaml::parse or (2) Yaml\Parser::parse function, a different vulnerability than CVE-2013-1348.

## Remediation
Upgrade `symfony/symfony` to version 2.1.7, 2.0.22 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/security-release-symfony-2-0-22-and-2-1-7-released)
