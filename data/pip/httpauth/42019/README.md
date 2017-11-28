## Overview
[`httpauth`](https://pypi.python.org/pypi/httpauth) is a WSGI middleware that secures some/all routes using HTTP Digest Authentication.

Affected versions of this package are vulnerable to Access Restriction Bypass. A malicious user could log in with an invalid username and empty password.

## References
- [Github ChangeLog](https://github.com/jonashaag/httpauth/blob/master/CHANGELOG.rst#02-aug-1-2012)
- [Github PR](https://github.com/jonashaag/httpauth/pull/1)
- [Github Commit](https://github.com/jonashaag/httpauth/commit/bac872bdee927db30109a36d1f878f4e8882f792)
