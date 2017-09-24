## Overview
[`keystonemiddleware`](https://pypi.python.org/pypi/keystonemiddleware) is a Middleware for OpenStack Identity
Keystonemiddleware is vulnerable to man-in-the-middle (MitM) attack. When the insecure option is set in the paste.ini file, keystonemiddleware will always disable certificate verification, regardless of the variables value.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-7144)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/09/25/51)
