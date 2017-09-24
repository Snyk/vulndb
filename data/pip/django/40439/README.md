## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package used a hardcoded password for a temporary database user created when running tests with an Oracle database. This user is usually dropped after the test suite completes, but not when using the `manage.py test --keepdb` option or if the user has an active session. This makes it easier for remote attackers to obtain access to the database.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9013)
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2016/nov/01/security-releases/)
