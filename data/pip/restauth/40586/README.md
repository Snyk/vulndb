## Overview
[`restauth`](https://pypi.python.org/pypi/restauth) is a RestAuth server.

Affected versions of this package are vulnerable to Authentication Bypass. The default configuration does sets `SECURE_CACHE` to `False`, meaning passwords wont get verified.

## References
- [GitHub Commit](https://github.com/RestAuth/server/commit/ec574bda827f934e7c73cdc38d7a21d77d38ddad)
