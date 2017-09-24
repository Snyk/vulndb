## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. There is no limit to the number of organizations, so sending a large amount of orgs, will cause the system hang.

## References
- [GitHub PR](https://github.com/getsentry/sentry/pull/2506)
- [GitHub Commit](https://github.com/getsentry/sentry/commit/0206ff097740b484360ce36295029c72dcceaad4)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
