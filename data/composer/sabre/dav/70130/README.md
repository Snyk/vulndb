# Overview
Affected versions of [`sabre/dav`](https://packagist.org/packages/sabre/dav) are vulnerable to Information Exposure.

The HTML\Browser plugin in SabreDAV before 1.6.9, 1.7.x before 1.7.7, and 1.8.x before 1.8.5, as used in ownCloud, when running on Windows, does not properly check path separators in the base path, which allows remote attackers to read arbitrary files via a \ (backslash) character.

## Remediation
Upgrade `sabre/dav` to version 1.6.9, 1.8.5, 1.7.7 or higher.

## References
- [Google Group](https://groups.google.com/forum/?fromgroups=#!topic/sabredav-discuss/ehOUu7wTSGQ)
