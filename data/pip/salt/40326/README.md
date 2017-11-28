## Overview
[`salt`](https://pypi.python.org/pypi/salt) is a Portable, distributed, remote execution and configuration management system.

Affected versions of this package are vulnerable to Information Exposure.
win_useradd, salt-cloud and the Linode driver in salt 2015.5.x before 2015.5.6, and 2015.8.x before 2015.8.1 leak password information in debug logs.

## References
- [Redhat](https://access.redhat.com/security/cve/cve-2015-6941)
