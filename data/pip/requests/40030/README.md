## Overview
[`requests`](https://pypi.python.org/pypi/requests) is a Python HTTP for Humans.

Affected versions of this package are vulnerable to Information Exposure. Remote servers may obtain a netrc password by reading the Authorization header in a redirected request.

## Remediation
Upgrade to version `2.3.0` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-1829)
- [GitHub Issue](https://github.com/kennethreitz/requests/issues/1885)
- [GitHub Commit](https://github.com/kennethreitz/requests/commit/f1893c835570d72823c970fbd6e0e42c13b1f0f2)
