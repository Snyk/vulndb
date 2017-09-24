## Overview
[`ajenti`](https://pypi.python.org/pypi/ajenti) is the server administration panel
Affected versions of this package are Directory Traversal due to no validation whether the path in the users request points to a static file. This allows an attacker to read any file or folder with system level privileges.

## References
- [GitHub Issue](https://github.com/ajenti/ajenti/issues/277)
