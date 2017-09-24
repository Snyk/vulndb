## Overview
[`centrifuge`](https://pypi.python.org/pypi/centrifuge) is a Simple real-time messaging in web applications.

Affected versions of this package are vulnerable to Authentication Bypass. No authentication was needed in order to call the `StructureDumpHandler` class, allowing an attacker to dump arbitrary data structures.

## References
- [GitHub Commit](https://github.com/centrifugal/centrifuge/commit/bb32eb4d25bfc42392a7a36002c09a2b762ea9d8)
