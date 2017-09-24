## Overview
[`python-swiftclient`](https://pypi.python.org/pypi/python-swiftclient) is a OpenStack Object Storage API Client Library.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks.
The OpenStack Python client library for Swift (python-swiftclient) 1.0 through 1.9.0 does not verify X.509 certificates from SSL servers, which allows man-in-the-middle attackers to spoof servers and obtain sensitive information via a crafted certificate.

## Remediation
Upgrade to version `2.0.0` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-6396)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/02/17/7)
