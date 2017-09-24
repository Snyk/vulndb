## Overview
[`tornado`](https://pypi.python.org/pypi/tornado) is a Tornado is a Python web framework and asynchronous networking library, originally developed at FriendFeed.

Affected versions of this package are vulnerable to Denial of Service attacks.
Algorithmic complexity vulnerability in the ssl.match_hostname function in Python 3.2.x, 3.3.x, and earlier, and unspecified versions of python-backports-ssl_match_hostname as used for older Python versions, allows remote attackers to cause a denial of service (CPU consumption) via multiple wildcard characters in the common name in a certificate.

## Remediation
Upgrade to version `3.3.3` or greater.

## References
- [Python Issues](http://bugs.python.org/issue17980)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-2099)
