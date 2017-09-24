## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Phishing attacks. The `reverse()` function does not properly validate URLs. When user input beginning with two forward-slash characters (`//`), `reverse()` could generate scheme-relative URLs to other hosts, allowing an attacker to generate links to sites of their choice, enabling phishing and other attacks.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/aug/20/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0480)
