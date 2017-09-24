## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Information Exposure. It is possible for a user to specify the date format and pass it to the date filter, e.g. `{{ last_updated|date:user_date_format }}`. An attacker could send a settings key instead of a date format (like `SECRET_KEY`), and obtain any secret in the application's settings.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/nov/24/security-releases-issued/)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2016-0129.html)
- [GitHub Commit](https://github.com/django/django/commit/316bc3fc9437c5960c24baceb93c73f1939711e4)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8213)
