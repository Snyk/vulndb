## Overview
[django](https://github.com/django/django) is a Python Web framework.

Affected versions of this package are vulnerable to Information Exposure. Remote attackers may obtain potentially sensitive information by leveraging data exposure from the `confirm_login_allowed()` method, as demonstrated by discovering whether a user account is inactive.

## Remediation
Upgrade `django` to versions 2.0.2, 1.11.10 or higher.

## References
- [Django Security Advisory](https://www.djangoproject.com/weblog/2018/feb/01/security-releases/)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-6188)
