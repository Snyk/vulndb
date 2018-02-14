# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Denial of Service (DoS).

The Security component in Symfony 2.0.x before 2.0.25, 2.1.x before 2.1.13, 2.2.x before 2.2.9, and 2.3.x before 2.3.6 allows remote attackers to cause a denial of service (CPU consumption) via a long password that triggers an expensive hash computation, as demonstrated by a PBKDF2 computation, a similar issue to [CVE-2013-5750](https://snyk.io/vuln/SNYK-PHP-FRIENDSOFSYMFONYUSERBUNDLE-70102).

## Remediation
Upgrade `symfony/symfony` to version 2.3.6, 2.1.13, 2.2.9, 2.0.25 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-5958)
- [Symfony Release Notes](http://symfony.com/blog/security-releases-cve-2013-5958-symfony-2-0-25-2-1-13-2-2-9-and-2-3-6-released)
