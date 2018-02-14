# Overview
Affected versions of [`zendframework/zendframework1`](https://packagist.org/packages/zendframework/zendframework1) are vulnerable to HTML Injection.

`Zend_Json_Encoder` was not taking into account the solidus character (`/`) during encoding, leading to incompatibilities with the JSON specification, and opening the potential for XSS or HTML injection attacks when returning HTML within a JSON string.

## Remediation
Upgrade `zendframework/zendframework1` to version 1.9.7, 1.8.5, 1.7.9 or higher.

## References
- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2010-06)
