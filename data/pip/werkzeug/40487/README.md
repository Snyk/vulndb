## Overview
[`werkzeug`](https://pypi.python.org/pypi/werkzeug) is the Swiss Army knife of Python web development.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to the lack of sanitization of the redirect url links.

## References
- [GitHub Commit](https://github.com/pallets/werkzeug/commit/7b8d887d33c768a77f40dd15ff5ac6ebbbab25b9)
