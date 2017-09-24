## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Access Restriction Bypass. When `ModelAdmin.save_as=True`, any authenticated user may to bypass intended access restrictions and create `ModelAdmin` objects via the "Save as New" option when editing objects and leveraging the "change" permission.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2016/feb/01/releases-192-and-189/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2048)
