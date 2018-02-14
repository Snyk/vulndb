# Overview
Affected versions of [`zendframework/zendframework1`](https://packagist.org/packages/zendframework/zendframework1) are vulnerable to HTML Injection.

`Zend_Json_Encoder` was not taking into account the solidus character (`/`) during encoding, leading to incompatibilities with the JSON specification, and opening the potential for XSS or HTML injection attacks when returning HTML within a JSON string.

## Remediation
Upgrade `zendframework/zendframework1` to version 1.9.8, 1.10.3 or higher.

## References
- [Zend Framework Security Advisory](https://framework.zend.com/security/advisory/ZF2010-07)
