# Overview
Affected versions of [`sabre/dav`](https://packagist.org/packages/sabre/dav) are vulnerable to XML External Entity (XXE) Injection.

SabreDAV before 1.7.11, as used in ownCloud Server before 5.0.15 and 6.0.x before 6.0.2, allows remote attackers to read arbitrary files, cause a denial of service, or possibly have other impact via an XML External Entity (XXE) attack.

## Remediation
Upgrade `sabre/dav` to version 1.8.9, 1.7.11 or higher.

## References
- [GitHub Release Notes](https://github.com/fruux/sabre-dav/releases/tag/1.7.11)
