## Overview
[`Twisted`](https://pypi.python.org/pypi/Twisted) is a An asynchronous networking framework written in Python
Affected versions of this package are vulnerable to Access Restriction Bypass.
When specifying the trustRoot (CA store) for the HTTP client, Twisted did not respect the user's specification, and always used the default of the platform trust. This means that users attempting to use this feature to implement certificate pinning, or otherwise restrict the trust CAs would still have accepted any certificate signed by a CA.

## Remediation
Upgrade to version `14.0.1` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-7143)
- [GitHub Commit](https://github.com/twisted/twisted/commit/3b5942252f5f3e45862a0e12b266ab29e243cc33)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/09/17/4)
