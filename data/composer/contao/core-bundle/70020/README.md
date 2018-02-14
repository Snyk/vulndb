# Overview
Affected versions of [`contao/core-bundle`](https://packagist.org/packages/contao/core-bundle) are vulnerable to Arbitrary File Inclusion.

A logged in back end user can include arbitrary existing PHP files by manipulating an URL parameter.

## Remediation
Upgrade `contao/core-bundle` to version 3.5.30, 4.4.1 or higher.

## References
- [Ref](https://contao.org/en/news/contao-4_4_1.html)
