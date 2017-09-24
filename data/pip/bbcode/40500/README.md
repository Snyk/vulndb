## Overview
[`bbcode`](https://pypi.python.org/pypi/bbcode) is a pure python bbcode parser and formatter.
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to not escaping some symbols like `"`, `'`, `,` and `.`.

## References
- [GitHub Issue](https://github.com/dcwatson/bbcode/issues/4)
- [GitHub Commit](https://github.com/dcwatson/bbcode/commit/116cb2067003e6c6f679ed3a34e9e00a97a332cf)
