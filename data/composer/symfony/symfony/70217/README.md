# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Access Restriction Bypass.

FragmentListener in the HttpKernel component in Symfony 2.3.19 through 2.3.28, 2.4.9 through 2.4.10, 2.5.4 through 2.5.11, and 2.6.0 through 2.6.7, when ESI or SSI support enabled, does not check if the `_controller` attribute is set, which allows remote attackers to bypass URL signing and security rules by including (1) no hash or (2) an invalid hash in a request to `/_fragment`.

## Remediation
Upgrade `symfony/symfony` to version 2.3.29, 2.6.8, 2.5.0, 2.5.12 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2015-4050-esi-unauthorized-access)
