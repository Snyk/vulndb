## Overview
Affected versions of [`djangorestframework`](https://pypi.python.org/pypi/djangorestframework) are vulnerable to Information Exposure.

`OrderingField` allows ordering on any fields, which an malicious attacker can exploit and ordering fields that are not visible and get sensitive data.

## Remediation
Upgrade `djangorestframework` to version 2.3.12 or higher.

## References
- [GitHub Release Note](https://github.com/encode/django-rest-framework/blob/version-2.4.x/docs/topics/release-notes.md#2312)
- [Github Commit](https://github.com/encode/django-rest-framework/commit/71c03b9db97edbde228777981de0ac7b664302de)
