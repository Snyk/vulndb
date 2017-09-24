## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The contents function in `admin/helpers.py` does not escape model attributes in `ModelAdmin.readonly_fields`, allowing injection if arbitrary web script or HTML.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/mar/09/security-releases/)
- [Django Issue](https://code.djangoproject.com/ticket/24461)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2241)
