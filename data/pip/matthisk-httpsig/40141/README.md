## Overview
[`matthisk-httpsig`](https://pypi.python.org/pypi/matthisk_httpsig) is a package that secures HTTP request signing using the HTTP Signature draft specification.

Affected versions of this package are vulnerable to Arbitrary Keyfile Reading from the disk. If used in a server framework like drf-httpsig, this is a serious security hole.

## References
- [GitHub Changelog](https://github.com/ahknight/httpsig/blob/master/CHANGELOG.rst#100-2014-jul-01)
