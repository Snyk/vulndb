## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks as it did not escape user input in the z function.

## References
- [GitHub Commit](https://github.com/getsentry/sentry/commit/a110a98cdc3d06d3261b5bd0ee3daa75f563382c)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
