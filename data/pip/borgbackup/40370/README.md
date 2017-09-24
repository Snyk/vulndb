## Overview
[`borgbackup`](https://pypi.python.org/pypi/borgbackup) is a backup tool.

Affected versions of this package are vulnerable to Authentication Bypass by Spoofing the list of Archives. Borg (aka BorgBackup) before 1.0.9 has a flaw in the cryptographic protocol used to authenticate the manifest (list of archives), potentially allowing an attacker to spoof the list of archives.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-10099)
- [GitHub Commit](https://github.com/borgbackup/borg/commit/28ad779a6f64b484d57ed92097db5cf884ad1842)
