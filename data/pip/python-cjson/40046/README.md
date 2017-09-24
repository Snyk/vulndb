## Overview
[`python-cjson`](https://pypi.python.org/pypi/python-cjson) is a Fast JSON encoder/decoder for Python.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.
Buffer overflow in Dan Pascu python-cjson 1.0.5, when UCS-4 encoding is enabled, allows context-dependent attackers to cause a denial of service (application crash) or possibly have unspecified other impact via vectors involving crafted Unicode input to the cjson.encode function.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-1666)
- [Github Commit](https://github.com/AGProjects/python-cjson/commit/dc2b8781b8666de5ca707318521f554904fdd690)
