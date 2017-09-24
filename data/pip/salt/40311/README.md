## Overview
[`salt`](https://pypi.python.org/pypi/salt) is a Portable, distributed, remote execution and configuration management system.

Affected versions of this package are vulnerable to Insecure Temporary File.

modules/serverdensity_device.py in SaltStack before 2014.7.4 does not properly handle files in /tmp.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-1838)
- [Github Commit](https://github.com/saltstack/salt/commit/e11298d7155e9982749483ca5538e46090caef9c)
