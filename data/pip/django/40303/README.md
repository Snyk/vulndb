## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The `is_safe_url()` function did not properly handle leading whitespaces, which allows remote attackers to craft URLs like `\njavascript:`.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/jan/13/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0220)
