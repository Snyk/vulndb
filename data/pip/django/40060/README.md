## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Directory Traversal on Windows. If a `/` (slash) is present in a session cookie, an attacker may be able to read or execute files

## References
- [Django Vulnerability Description](http://www.djangoproject.com/weblog/2011/feb/08/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-0698)
- [Openwall](http://openwall.com/lists/oss-security/2011/02/09/6)
