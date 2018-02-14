# Overview
Affected versions of [`typo3/cms`](https://packagist.org/packages/typo3/cms) are vulnerable to Session Hijacking.

The Authentication component in TYPO3 6.2.0 before 6.2.3 does not properly invalidate timed out user sessions, which allows remote attackers to bypass authentication via unspecified vectors.

## Remediation
Upgrade `typo3/cms` to version 6.2.3 or higher.

## References
- [Typo3 Security Bulletin](https://typo3.org/teams/security/security-bulletins/typo3-core/typo3-core-sa-2014-001/)
