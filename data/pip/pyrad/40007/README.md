## Overview
[`pyrad`](https://pypi.python.org/pypi/pyrad) is a RADIUS tools.

Affected versions of this package are vulnerable to Insecure Randomness.
It was using Python's random module in a number of places to generate pseudo-random data.  In the case of the authenticator data, it was being used to secure a password sent over the wire.  Because Python's random module is not really suited for this purpose (not random enough), it could lead to password hashing that may be predictable.


## Remediation
Upgrade to version `[,2.1)` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-0294)
- [Openwall](http://openwall.com/lists/oss-security/2013/02/16/4)
- [Github Commit](https://github.com/wichert/pyrad/commit/38f74b36814ca5b1a27d9898141126af4953bee5)
