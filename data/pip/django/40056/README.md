## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. The length of a string representing a base36 timestamp was not validated,  allowing remote attackers to cause a denial of service (resource consumption) via a URL that specifies a large base36 integer.

## References
- [Django Vulnerability Description](http://www.djangoproject.com/weblog/2010/dec/22/security)
- [GitHub Commit](https://github.com/django/django/commit/6819be1ea1)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=665373)
- [Openwall](http://www.openwall.com/lists/oss-security/2011/01/03/5)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-4535)
