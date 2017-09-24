## Overview
[`sentry`](https://pypi.python.org/pypi/sentry) is a realtime logging and aggregation server.

Affected versions of this package are vulnerable to Arbitrary Code Execution. There was no verification on which interface was used, allowing an attacker to use an interface of their choice, and execute arbitrary code.

## References
- [GitHub Commit](https://github.com/getsentry/sentry/commit/5793c6cac19aeb7d2e19f9a09f4421b771af4306)
- [GitHub Changelog](https://github.com/getsentry/sentry/blob/master/CHANGES)
