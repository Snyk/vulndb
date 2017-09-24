## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Open Redirecting. The `http.is_safe_url()` function does not properly validate URLs, like `http:\\\djangoproject.com.`, which This allows a user to be redirected to an unsafe URL unexpectedly.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/may/14/security-releases-issued/)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/05/14/10)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3730)
