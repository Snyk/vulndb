## Overview
[`django-sql-explorer`](https://pypi.python.org/pypi/django-sql-explorer) is a pluggable app that allows users (admins) to execute SQL, view, and export the results.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks. The autoescaping method was disabled by default, allowing an attacker to alter database values.

## References
- [Github Issue](https://github.com/groveco/django-sql-explorer/issues/267)
- [Github PR](https://github.com/groveco/django-sql-explorer/pull/286)
- [Github Commit](https://github.com/groveco/django-sql-explorer/commit/adb3bf8b12350e875b02db43409ca07c7368f576)
