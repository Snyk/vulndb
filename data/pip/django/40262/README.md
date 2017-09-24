## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Information Exposure. The administrative interface (`contrib.admin`) does not check if a field represents a relationship between models. This allows remote authenticated users to obtain sensitive information via the `to_field` parameter in a popup action to an admin change form page.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/aug/20/security/)
- [GitHub Commit](https://github.com/django/django/commit/2b31342cdf14fc20e07c43d258f1e7334ad664a6)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0483)
