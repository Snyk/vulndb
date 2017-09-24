## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. During deserialization in the project selector, an attacker can inject and execute arbitrary script via the sentryapi.

## References
- [GitHub PR](https://github.com/getsentry/sentry/pull/3797)
- [GitHub Commit](https://github.com/getsentry/sentry/commit/82234e1f3f1d50d36aeb89c188f4e66cd66db8a1)
