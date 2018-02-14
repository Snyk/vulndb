## Overview
Affected versions of [`cryptography`](https://pypi.python.org/pypi/cryptography) are vulnerable to Denial of Service (DoS).

The OpenSSL backend beffore 1.0.2 made use of assertions to check response where the tests could not trigger a failure. If a user ran Python with this -O flag and got an invalid response code this could lead to a crash.

## Remediation
Upgrade `cryptography` to version 1.0.2 or higher.

## References
- [GitHub Changelog](https://github.com/pyca/cryptography/blob/master/CHANGELOG.rst#102---2015-09-27)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1267548)
