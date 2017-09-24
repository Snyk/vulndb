## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. The `URLValidator` function included a regular expression that was extremely slow to evaluate against certain inputs, causing high memory consumption.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5145)
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/jul/08/security-releases/)
