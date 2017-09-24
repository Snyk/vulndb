## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to a Denial of Service (DoS) attacks. When an inputing a long string into the `utils.html.strip_tags` function, an infinite loop occurs.

**Note:** This occurs only when using Python <2.7.7 or =3.3.5.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/mar/18/security-releases/)
- [Oracle Security Bulletin](http://www.oracle.com/technetwork/topics/security/bulletinapr2015-2511959.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2316)
