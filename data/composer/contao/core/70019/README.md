# Overview
Affected versions of [`contao/core`](https://packagist.org/packages/contao/core) are vulnerable to Arbitrary File Inclusion .A logged in back end user can include arbitrary PHP files by manipulating an URL parameter. Since Contao does not allow to upload PHP files in the file manager, the attack is limited to the existing PHP files on the server.

## Remediation
Upgrade `contao/core` to version 3.5.28 or higher.

## References
- [Contao Release Notes](https://contao.org/en/news/contao-3_5_28.html)
