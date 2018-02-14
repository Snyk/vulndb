# Overview
Affected versions of [`zendframework/zendframework1`](https://packagist.org/packages/zendframework/zendframework1) are vulnerable to Arbitrary Code Execution.

Doctrine Annotations before 1.2.7, Cache before 1.3.2 and 1.4.x before 1.4.2, Common before 2.4.3 and 2.5.x before 2.5.1, ORM before 2.4.8 or 2.5.x before 2.5.1, MongoDB ODM before 1.0.2, and MongoDB ODM Bundle before 3.0.1 use world-writable permissions for cache directories, which allows local users to execute arbitrary PHP code with additional privileges by leveraging an application with the umask set to 0 and that executes cache entries as code.

## Remediation
Upgrade `zendframework/zendframework1` to version 1.12.16 or higher.

## References
- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2015-07)
