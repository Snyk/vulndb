## Overview
[`salt`](https://pypi.python.org/pypi/salt) is a Portable, distributed, remote execution and configuration management system.

Affected versions of this package are vulnerable to Information Exposure.
The state.sls function in Salt before 2015.8.3 uses weak permissions on the cache data, which allows local users to obtain sensitive information by reading the file.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8034)
