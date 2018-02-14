## Overview
Affected versions of [`pyjwt`](https://pypi.python.org/pypi/pyjwt) are vulnerable to Security Bypass.

when `alg=none` its accept value for the key which could bypass signature verification.

## Remediation
Upgrade `pyjwt` to version 1.0.0 or higher.

## References
- [GitHub Changelog](https://github.com/jpadilla/pyjwt/blob/master/CHANGELOG.md#fixed-12)
- [Github PR](https://github.com/jpadilla/pyjwt/pull/109)
- [Github Commit](https://github.com/jpadilla/pyjwt/commit/88a9fc56bdc6c870aa6af93bda401414a217db2a)
