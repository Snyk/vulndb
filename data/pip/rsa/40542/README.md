## Overview
[`rsa`](https://pypi.python.org/pypi/rsa) is a Pure-Python RSA implementation.

Affected versions of this package are vulnerable to Authentication Bypass due to not implementing authentication encryption or use MACs to validate messages before decrypting public key encrypted messages.

## References
- [GitHub Issue](https://github.com/sybrenstuvel/python-rsa/issues/13)
- [GitHub Commit](https://github.com/sybrenstuvel/python-rsa/commit/1681a0b2f84a4a252c71b87de870a2816de06fdf)
