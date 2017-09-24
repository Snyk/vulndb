## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. When creating or editing a widget, user values are not escaped.

## References
- [GitHub Commit](https://github.com/getsentry/sentry/commit/364b959811561de83f29893e105cc590224edbee)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
