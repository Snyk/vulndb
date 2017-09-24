## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. When a form uses `show_hidden_initial=True` and `ModelMultipleChoiceField`, An attacker may cause a large number of SQL queries by submitting duplicate values for the field's data.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/jan/13/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0222)
