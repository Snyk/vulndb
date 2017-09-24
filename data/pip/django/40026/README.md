## Overview
[`Django`](https://pypi.python.org/pypi/Django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) attacks.
The caching framework reuses a cached CSRF token for all anonymous users, which allows remote attackers to bypass CSRF protections by reading the CSRF cookie for anonymous users.

## Remediation
Upgrade to versions `1.7b2`, `1.6.3`, `1.5.6`, `1.4.11` or greater.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/apr/21/security/)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0473)
- [Redhat Vulnerability Advisory](https://rhn.redhat.com/errata/RHSA-2014-0456.html)
