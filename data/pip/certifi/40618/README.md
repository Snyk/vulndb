## Overview
[`certifi`](https://pypi.python.org/pypi/certifi) is a Python package for providing Mozilla's CA Bundle.

Affected versions of this package are vulnerable to Improper Certificate Validation due to not rejecting the deprecated 1024-bit certificates, and only giving a warning.

## References
- [GitHub Commit](https://github.com/certifi/python-certifi/commit/4f35e3529c78ced74040cf5d80bf8ec4aac9a190)
