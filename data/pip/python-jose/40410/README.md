## Overview
[`python-jose`](https://pypi.python.org/pypi/python-jose) is a JOSE implementation in Python.

Affected versions of this package are vulnerable to Timing attacks. It allows attackers to leveraging an unspecified failure to use a constant time comparison for HMAC keys.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7036)
- [Github PR](https://github.com/mpdavis/python-jose/pull/35)
- [Github Commit](https://github.com/mpdavis/python-jose/commit/73007d6887a7517ac07c6e755e494baee49ef513)
