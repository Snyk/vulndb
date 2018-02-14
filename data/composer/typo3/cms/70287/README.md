# Overview
Affected versions of [`typo3/cms`](https://packagist.org/packages/typo3/cms) are vulnerable to Cross-site Scripting (XSS).

The sanitizeLocalUrl function in TYPO3 6.x before 6.2.15, 7.x before 7.4.0, 4.5.40, and earlier allows remote authenticated users to bypass the XSS filter and conduct cross-site scripting (XSS) attacks via a base64 encoded data URI, as demonstrated by the (1) returnUrl parameter to show_rechis.php and the (2) redirect_url parameter to index.php.

## Remediation
Upgrade `typo3/cms` to version 6.2.15, 7.4.0 or higher.

## References
- [Typo3 Security Bulletin](https://typo3.org/teams/security/security-bulletins/typo3-core/typo3-core-sa-2015-009/)
