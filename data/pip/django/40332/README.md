## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. When sending multiple requests with unique session keys, the session backends create new empty records in the session storage, which can fill the session store.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/jul/08/security-releases/)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2015-1686.html)
- [Oracle Security Bulletin](http://www.oracle.com/technetwork/topics/security/bulletinoct2015-2511968.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5143)
