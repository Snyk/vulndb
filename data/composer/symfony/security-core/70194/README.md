# Overview
Affected versions of [`symfony/security-core`](https://packagist.org/packages/symfony/security-core) are vulnerable to Access Restriction Bypass. Validating a user password with a UserPassword constraint but with no NotBlank constraint would pass without any error.

## Remediation
Upgrade `symfony/security-core` to version 2.7.32, 2.8.25, 3.2.12, 3.3.5 or higher.

## References
- [Symphony Release Notes](https://symfony.com/blog/cve-2017-11365-empty-passwords-validation-issue)
- [GitHub PR](https://github.com/symfony/symfony/pull/23507)
