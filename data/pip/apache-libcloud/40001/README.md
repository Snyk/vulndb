## Overview
[`apache-libcloud`](https://pypi.python.org/pypi/apache-libcloud) is a standard Python library that abstracts away differences among multiple cloud provider APIs.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks.
libcloud before 0.4.1 does not verify SSL certificates for HTTPS connections, which allows remote attackers to spoof certificates and bypass intended access restrictions via a man-in-the-middle (MITM) attack.

## Remediation
Upgrade to version `0.4.2` or greater.

## References
- [Libcloud Security Advisory](http://libcloud.apache.org/security.html)
