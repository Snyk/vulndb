## Overview
[`keystonemiddleware`](https://pypi.python.org/pypi/keystonemiddleware) is a Middleware for OpenStack Identity
The s3_token middleware in python-keystoneclient is vulnerable to man-in-the-middle attacks. This vulnerability is caused when python-keystoneclient disables certificate verification when the "insecure" option is set in a paste.ini file regardless of the value.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-1852)
