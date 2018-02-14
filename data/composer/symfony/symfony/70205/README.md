# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Arbitrary Code Execution.

The Yaml::parse function in Symfony 2.0.x before 2.0.22 remote attackers to execute arbitrary PHP code via a PHP file, a different vulnerability than CVE-2013-1397.

## Remediation
Upgrade `symfony/symfony` to version 2.0.22 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/security-release-symfony-2-0-22-and-2-1-7-released)
