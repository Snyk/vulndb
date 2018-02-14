## Overview
[`ftpd`](https://rubygems.org/gems/ftpd) is ftpd is a pure Ruby FTP server library.

Affected versions of the package are vulnerable to Information Exposure, as it logs passwords in plaintext in the logd.

## Remediation
Upgrade `ftpd` to version 2.0.1 or higher.

## References
- [GitHub Changelog](https://github.com/wconrad/ftpd/blob/a480aaf43a3962cecbb5342be6fbf66ea3d607a6/Changelog.md#022)
- [GitHub Commit](https://github.com/wconrad/ftpd/commit/828064f1a0ab69b2642c59cab8292a67bb44182c)
