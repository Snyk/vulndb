# Overview
Affected versions of [`typo3/cms`](https://packagist.org/packages/typo3/cms) are vulnerable to Link Spoofing.

The frontend rendering component in TYPO3 4.5.x before 4.5.39, 4.6.x through 6.2.x before 6.2.9, and 7.x before 7.0.2, when config.prefixLocalAnchors is set and using a homepage with links that only contain anchors, allows remote attackers to change URLs to arbitrary domains for those links via unknown vectors.

## Remediation
Upgrade `typo3/cms` to version 4.5.39, 6.2.9, 7.0.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-9508)
- [Typo3 Security Bulletin](https://typo3.org/teams/security/security-bulletins/typo3-core/typo3-core-sa-2014-003/)
