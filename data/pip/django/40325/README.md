## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Session Hijacking. The `session.flush` function in the `cached_db` backend did not properly flush the session, which allows remote attackers to hijack user sessions via an empty string in the session key.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/may/20/security-release/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3982)
