# Overview
Affected versions of [`symfony/security`](https://packagist.org/packages/symfony/security) are vulnerable to Insecure Randomness .

The nextBytes function in the SecureRandom class in Symfony before 2.3.37, 2.6.x before 2.6.13, and 2.7.x before 2.7.9 does not properly generate random numbers when used with PHP 5.x without the paragonie/random_compat library and the openssl_random_pseudo_bytes function fails, which makes it easier for attackers to defeat cryptographic protection mechanisms via unspecified vectors.

## Remediation
Upgrade `symfony/security` to version 2.3.37, 2.6.13, 2.5.0, 2.7.9, 2.6.0 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2016-1902-securerandom-s-fallback-not-secure-when-openssl-fails)
