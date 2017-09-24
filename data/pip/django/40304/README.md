## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. The `serve()` view reads files an entire line at a time, which allows remote attackers to cause high memory consumption via a long line in a file.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/jan/13/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0221)
