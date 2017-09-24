## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. There was no validation on password length and long passwords could exhausting the hashing algorithm.

## References
- [GitHub PR](https://github.com/getsentry/sentry/pull/5166)
- [GitHub Commit](https://github.com/getsentry/sentry/commit/460f0f7f1a910ccefce3c9ad11a9cc8f1214aeb1)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES#L919)
