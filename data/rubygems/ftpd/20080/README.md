## Overview
[`ftpd`](https://rubygems.org/gems/ftpd) is a pure Ruby FTP server library.
Affected versions of this gem are vulnerable to arbitrary command injection.
The flaw is triggered when handling a specially crafted option or filename that contains a shell character.

## Remediation
Upgrade to version `>= 0.2.2` or greater.

## References
- http://rubysec.com/advisories/CVE-2013-2512
