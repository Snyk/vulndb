## Overview
[`yubiauth`](https://pypi.python.org/pypi/yubiauth) provides a user management system which can be used as a base for other systems.

Affected versions of this package are vulnerable to Access Restriction Bypass, as it did not revalidate the password before changing it.

## References
- [Github Commit](https://github.com/Yubico/yubiauth/commit/78ce6ffabb291bd3e8a17f1b927cf90926816290)
