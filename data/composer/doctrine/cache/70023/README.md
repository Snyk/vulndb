# Overview
Affected versions of [`doctrine/cache`](https://packagist.org/packages/doctrine/cache) are vulnerable to Arbitrary Code Execution.

Doctrine Annotations before 1.2.7, Cache before 1.3.2 and 1.4.x before 1.4.2, Common before 2.4.3 and 2.5.x before 2.5.1, ORM before 2.4.8 or 2.5.x before 2.5.1, MongoDB ODM before 1.0.2, and MongoDB ODM Bundle before 3.0.1 use world-writable permissions for cache directories, which allows local users to execute arbitrary PHP code with additional privileges by leveraging an application with the umask set to 0 and that executes cache entries as code.

## Remediation
Upgrade `doctrine/cache` to version 1.4.2, 1.3.2 or higher.

## References
- [Doctrine Release Notes](http://www.doctrine-project.org/2015/08/31/security_misconfiguration_vulnerability_in_various_doctrine_projects.html)
