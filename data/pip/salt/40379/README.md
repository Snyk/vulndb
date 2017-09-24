## Overview
[`salt`](https://pypi.python.org/pypi/salt) is a Portable, distributed, remote execution and configuration management system.

Salt 2015.8.x before 2015.8.4 does not properly handle clear messages on the minion, which allows man-in-the-middle attackers to execute arbitrary code by inserting packets into the minion-master data stream.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1866)
