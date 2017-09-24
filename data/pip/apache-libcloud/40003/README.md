## Overview
[`apache-libcloud`](https://pypi.python.org/pypi/apache-libcloud) is a standard Python library that abstracts away differences among multiple cloud provider APIs.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks.
Apache Libcloud before 0.11.1 uses an incorrect regular expression during verification of whether the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via a crafted certificate.

## Remediation
Upgrade to version `0.11.1` or greater.

## References
- [Libcloud Security Advisory](http://libcloud.apache.org/security.html)
