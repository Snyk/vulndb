## Overview
[`morepath`](https://pypi.python.org/pypi/morepath) is a Python web framework.

Affected versions of this package are vulnerable to HTTP Header Injection due to not checking that the requested HTTP header is valid.

## References
- [Github Issue](https://github.com/morepath/morepath/issues/271)
- [Github Commit](https://github.com/morepath/morepath/commit/5d94ce6e519670e82c5d03fc77d6292035793d9f)
