## Overview
[`borgbackup`](https://pypi.python.org/pypi/borgbackup) is a backup tool.

Affected versions of this package are vulnerable to Arbitrary File Overwrite. BorgBackup before 1.0.9 has a flaw in the way duplicate archive names were processed during manifest recovery, potentially allowing an attacker to overwrite an archive.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-10100)
- [GitHub Commit](https://github.com/borgbackup/borg/commit/28ad779a6f64b484d57ed92097db5cf884ad1842)
