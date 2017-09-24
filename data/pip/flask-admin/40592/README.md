## Overview
[`flask_admin`](https://pypi.python.org/pypi/flask_admin) is a Simple and extensible admin interface framework for Flask.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. If a database field contains raw html, it is rendered ad html without escaping.

## References
- [GitHub Issue](https://github.com/flask-admin/flask-admin/issues/1000)
- [GitHub PR](https://github.com/flask-admin/flask-admin/pull/1002)
- [GitHub Commit](https://github.com/flask-admin/flask-admin/commit/f447db0c78c03235d0dd6bdce0c5365fc6a7c321)
