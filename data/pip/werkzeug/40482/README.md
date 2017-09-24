## Overview
[`werkzeug`](https://pypi.python.org/pypi/werkzeug) is the Swiss Army knife of Python web development.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks via the `plaintext` variable in the debug page.

## References
- [GitHub PR](https://github.com/pallets/werkzeug/pull/1001)
- [GitHub Commit](https://github.com/pallets/werkzeug/commit/1034edc7f901dd645ec6e462754111b39002bd65)
