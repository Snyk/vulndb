## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS). The `utils.http.is_safe_url` function allows remote attackers to redirect users to arbitrary web sites and conduct phishing attacks or possibly conduct Cross-site Scripting (XSS) attacks via a URL containing basic authentication. For example, a URL like `http://mysite.example.com\@attacker.com` would be considered safe if the request's host is `http://mysite.example.com`, but redirecting to this URL sends the user to attacker.com.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2016/mar/01/security-releases)
- [Oracle Security Bulletin](http://www.oracle.com/technetwork/topics/security/bulletinapr2016-2952098.html)
- [GitHub Commit](https://github.com/django/django/commit/c5544d289233f501917e25970c03ed444abbd4f0)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2016-0502.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2512)
