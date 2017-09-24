## Overview
[`trytond`](https://pypi.python.org/pypi/trytond) is a Tryton server
file_open in Tryton 3.x and 4.x through 4.2.2 allows remote authenticated users with certain permissions to read arbitrary files via a "same root name but with a suffix" attack.

**NOTE:** This vulnerability exists because of an incomplete fix for [CVE-2016-1242](https://snyk.io/vulnSNYK-PYTHON-TRYTOND-40376).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-0360)
- [Debian Security Advisory](https://lists.debian.org/debian-security-announce/2017/msg00084.html)
