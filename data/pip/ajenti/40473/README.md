## Overview
[`ajenti`](https://pypi.python.org/pypi/ajenti) is the server administration panel
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to not validating user input passed into the `html()` jquery function.

## References
- [Mehmet Ince's Blog](https://www.mehmetince.net/ajenti-stored-xss-vulnerability-through-log-files/)
- [GitHub Issue](https://github.com/ajenti/ajenti/issues/602)
