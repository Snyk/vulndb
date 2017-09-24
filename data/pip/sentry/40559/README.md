## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to the lack of escaping in JQuery ajax completion dropdowns.

## References
- [GitHub Commit](https://github.com/getsentry/sentry/commit/beae68d620357a86a832adf5b2338c6ffde6a496)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
