## Overview
[`webob`](https://pypi.python.org/pypi/webob) is a WSGI request and response object.

Affected versions of this package are vulnerable to HTTP Response Splitting attacks. It is possible to set arbitrary headers in the HTTP response by embedding a \\r or \\n character in the header value, and sending it to the server.

## References
- [GitHub Issue](https://github.com/Pylons/webob/issues/217)
- [GitHub PR](https://github.com/Pylons/webob/pull/229)
- [GitHub Commit](https://github.com/Pylons/webob/commit/97041f58fcee30b37a8c0fba0108cf69c6e01330)
