## Overview
[`requests_kerberos`](https://pypi.python.org/pypi/requests_kerberos) is a Kerberos authentication handler for python-requests.

Affected versions of this package are vulnerable to Authentication Bypass due to not authenticating server responses via the `handle_response()` function.

## References
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-8650)
- [GitHub Issue](https://github.com/requests/requests-kerberos/issues/35)
- [GitHub PR](https://github.com/requests/requests-kerberos/pull/36)
- [GitHub Commit](https://github.com/requests/requests-kerberos/commit/208bebb7008796a07be0204d9b5beaa55d2373ae)
