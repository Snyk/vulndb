## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. The `contrib.sessions.backends.base.SessionBase.flush` and `cache_db.SessionStore.flush` functions create empty sessions causing session store consumption.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/aug/18/security-releases/)
- [Oracle Security Bulletin](http://www.oracle.com/technetwork/topics/security/bulletinoct2015-2511968.html)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2015-1766.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5964)
