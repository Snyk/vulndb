## Overview
[`waitress`](https://pypi.python.org/pypi/waitress) is a Waitress WSGI server.

Affected versions of this package are vulnerable to HTTP response splitting attacks. It is possible to set arbitrary headers in the HTTP response by embedding a \\r or \\n character in the header value, and sending it to the server.

## References
- [GitHub Issue](https://github.com/Pylons/waitress/issues/117)
- [GitHub PR](https://github.com/Pylons/waitress/pull/121)
- [GitHub Commit](https://github.com/Pylons/waitress/commit/07e21576ef272a1bbd5410ef34f479e31ee68665)
