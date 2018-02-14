# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Arbitrary Code Execution.

Symfony 2.0.x before 2.0.20, 2.1.x before 2.1.5, and 2.2-dev, when the internal routes configuration is enabled, allows remote attackers to access arbitrary services via vectors involving a URI beginning with a /internal substring.

## Remediation
Upgrade `symfony/symfony` to version 2.1.5, 2.0.20 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2012-6432)
- [Symfony Release Notes](http://symfony.com/blog/security-release-symfony-2-0-20-and-2-1-5-released)
