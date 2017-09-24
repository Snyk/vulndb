## Overview
[`salt`](https://pypi.python.org/pypi/salt) is a Portable, distributed, remote execution and configuration management system.

Affected versions of this package are vulnerable to information Exposure. It allows deleted minions to read or write to minions with the same id, related to caching.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9639)
