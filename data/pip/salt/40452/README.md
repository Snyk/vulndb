## Overview
[`salt`](https://pypi.python.org/pypi/salt) is a Portable, distributed, remote execution and configuration management system.

Affected versions of this package are vulnerable to Arbitrary Code Execution.
When using the local_batch client from salt-api in SaltStack Salt before 2015.8.13, 2016.3.x before 2016.3.5, and 2016.11.x before 2016.11.2, external authentication is not respected, enabling all authentication to be bypassed.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5192)
