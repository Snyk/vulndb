## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. A filename associated with a file upload was not escaped before rendering.

## References
- [Django Vulnerability Description](http://www.djangoproject.com/weblog/2011/feb/08/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-0697)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=676359)
- [Openwall](http://openwall.com/lists/oss-security/2011/02/09/6)
