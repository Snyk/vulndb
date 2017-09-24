## Overview
[`cipher_googlepam`](https://pypi.python.org/pypi/cipher_googlepam) is a Google PAM Module (defunct).

Affected versions of this package are vulnerable to Authentication Bypass due to using the same cache key for all users. When one user logged in successfully, other users could not log in with their own passwords. The first user could now use his password to log in as anyone else.

## References
- [GitHub Commit](https://github.com/zopefoundation/cipher.googlepam/commit/fb0c5a1876b31a693a7361a6f9662a515242640c)
