## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks via the Request interface. An attacker could craft a Sentry packet with a `javascript:*` url, which is linked in the UI to be clicked.

## References
- [GitHub PR](https://github.com/getsentry/sentry/pull/3923)
- [GitHub Commit](https://github.com/getsentry/sentry/commit/33d5aa268e4a6dee5c27daa4d6ebe32d384c4d7a)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
