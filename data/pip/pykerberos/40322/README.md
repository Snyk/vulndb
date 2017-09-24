## Overview
[`pykerberos`](https://pypi.python.org/pypi/pykerberos) is a High-level interface to Kerberos.

Affected versions of this package are vulnerable to a Man-in-the-Middle (MitM) attacks. The python-kerberos `checkPassword()` function does not verify that the KDC that it is authenticating with is the one that it intended to communicate with. This could allow a man-in-the-middle attacker to spoof a KDC when an application using python-kerberos attempts to verify a password via the `checkPassword()` function.


## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2015-3206)
- [Github Commit](https://github.com/02strich/pykerberos/commit/02d13860b25fab58e739f0e000bed0067b7c6f9c)
