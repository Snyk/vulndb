# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Directory Traversal.

The Intl component includes various bundle readers that are used to read resource bundles from the local filesystem. The `read()` methods of these classes use a path and a locale to determine the language bundle to retrieve.

The locale argument value is commonly retrieved from untrusted user input (like a URL parameter). An attacker can use this argument to navigate to arbitrary directories via the dot-dot-slash attack.

## Remediation
Upgrade `symfony/symfony` to versions 2.7.38, 2.8.31, 3.1.0, 3.2.0, 3.2.14, 3.3.13 higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2017-16654-intl-bundle-readers-breaking-out-of-paths)
- [GitHub PR](https://github.com/symfony/symfony/pull/24994)
