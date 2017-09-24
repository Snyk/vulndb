## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Timing attacks. There is a timing difference between a login request for a user with a password encoded in an older number of iterations and login request for a nonexistent user (which runs the default hasher's default number of iterations). This only affects users who haven't logged in since the iterations were increased in Django 1.6.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2016/mar/01/security-releases/)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2016-0502.html)
- [GitHub Commit](https://github.com/django/django/commit/67b46ba7016da2d259c1ecc7d666d11f5e1cfaab)
- [Oracle Security Bulletin](http://www.oracle.com/technetwork/topics/security/bulletinapr2016-2952098.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2513)
