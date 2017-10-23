## Overview
[`pytest-devpi-server`](https://pypi.python.org/pypi/pytest-devpi-server) is session-scoped by default
and run in a subprocess and temp dir to cleanup when it's done.

Affected versions of this package are vulnerable to Arbitrary Code Execution attacks. It would run subprocess with shell=True, allowing an attacker to insert shell commands in the function.

## References
- [Github Commit](https://github.com/manahl/pytest-plugins/commit/ea6072a461edde63c07f7b7f4a4daffdc09fb116)
