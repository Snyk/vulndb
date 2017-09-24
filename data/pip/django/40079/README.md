## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Session Manipulation. It stored session data in the cache using the root namespace for both session identifiers and application-data keys. This allows remote attackers to modify a session by triggering use of a key that is equal to that session's identifier.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2011/sep/09/security-releases-issued/)
- [Django Vulnerability Update](https://www.djangoproject.com/weblog/2011/sep/10/127/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4136)
- [Openwall](http://openwall.com/lists/oss-security/2011/09/11/1)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=737366)
