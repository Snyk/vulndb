## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. User input is not escaped when adding labels to widgets.

## References
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
