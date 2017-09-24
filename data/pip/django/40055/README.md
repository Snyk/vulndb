## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package expose sensitive information due to not properly restricting the use of a query string that performs certain object filtering. An attacker may obtain sensitive information via a series of requests containing regular expressions, as demonstrated by a `created_by__password__regex` parameter.

## References
- [Django Vulnerability Description](http://www.djangoproject.com/weblog/2010/dec/22/security/)
- [GitHub Commit](https://github.com/django/django/commit/732198ed5c)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=665373)
- [Openwall](http://www.openwall.com/lists/oss-security/2011/01/03/5)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-4534)
