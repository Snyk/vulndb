## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The tag values were not escaped on the group details page.

## References
- [GitHub Commit](https://github.com/getsentry/sentry/commit/626acc195003cea0d830eada4a338b60ba7ea614)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
