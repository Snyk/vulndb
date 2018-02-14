# Overview
Affected versions of [`doctrine/doctrine-module`](https://packagist.org/packages/doctrine/doctrine-module) are vulnerable to Access Restriction Bypass.
It was possible (under certain circumstances) to obtain a valid Zend\Authentication identity even without knowing the user's credentials by using a numerically valued credential in `DoctrineModule\Authentication\Adapter\ObjectRepository`

## Remediation
Upgrade `doctrine/doctrine-module` to version 0.7.1 or higher.

## References
- [GitHub Issue](https://github.com/doctrine/DoctrineModule/issues/249)
