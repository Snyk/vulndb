# Overview
Affected versions of [`zendframework/zendframework`](https://packagist.org/packages/zendframework/zendframework) are vulnerable to SQL Injection vector when manually quoting values for sqlsrv extension, using null byte.

## Remediation
Upgrade `zendframework/zendframework` to version 2.3.3, 2.2.8 or higher.

## References
- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2014-06)
