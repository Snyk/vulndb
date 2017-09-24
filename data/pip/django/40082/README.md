## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable due to lack of request validation.
The `verify_exists` functionality in the `URLField` originally tests a URL's validity through a HEAD request, but then uses a GET request for the new target URL in the case of a redirect. This may allow remote attackers to trigger arbitrary GET requests with an unintended source IP address via a crafted Location header.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2011/sep/09/security-releases-issued/)
- [Django Vulnerability Update](https://www.djangoproject.com/weblog/2011/sep/10/127/)
- [Openwall](http://openwall.com/lists/oss-security/2011/09/11/1)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=737366)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4138)
