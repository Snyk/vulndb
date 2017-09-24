## Overview
[`Django`](https://pypi.python.org/pypi/Django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Information Exposure. When the `DEBUG` is set to `True`, Exceptions generate a formatted error page, including the full traceback and a display of the HTTP request and relevant settings. Sensitive settings are obscured in this display, but the data submitted with the HTTP request is not. An error in a login view could result in a DEBUG page displaying the plain-text password (from the POST data).

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2011/sep/09/security-releases-issued/)
- [Django Vulnerability Update](https://www.djangoproject.com/weblog/2011/sep/10/127/)
- [Openwall](http://openwall.com/lists/oss-security/2011/09/11/1)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=737366)
