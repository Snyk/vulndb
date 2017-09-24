## Overview
[`requests`](https://pypi.python.org/pypi/requests) is a Python HTTP for Humans.

Affected versions of this package are vulnerable to Information Disclosure attacks. Remote servers may obtain sensitive information by reading the `Proxy-Authorization` header in a redirected request.

## Remediation
Upgrade to version `2.3.0` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-1830)
- [GitHub Issue](https://github.com/kennethreitz/requests/issues/1885#issuecomment-33793651)
- [GitHub Commit](https://github.com/kennethreitz/requests/commit/4d8cb3244e8e4f84b250c10a48e025f9a8bf6137)
