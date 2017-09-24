## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. The authentication framework (`django.contrib.auth`) hashes passwords with a function that does repeated rounds of computation before finishing. If long password is entered, it may cause high CPU consumption. An attacker may send many of these passwords to be hashed and cause a denial of service.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2013/sep/15/security/)
- [Django Developers Forum](http://python.6.x6.nabble.com/Set-a-reasonable-upper-bound-on-password-length-td5032218.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1443)
