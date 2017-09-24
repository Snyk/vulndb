## Overview
[`python-glanceclient`](https://pypi.python.org/pypi/python-glanceclient) is a OpenStack Image API Client Library.

Affected versions of this package are vulnerable to python-glanceclient: Missing SSL certificate check attacks.
The Python client library for Glance (python-glanceclient) before 0.10.0 does not properly check the preverify_ok value, which prevents the server hostname from being verified with a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate and allows Man-in-the-Middle (MitM) attackers to spoof SSL servers via an arbitrary valid certificate.

## Remediation
Upgrade to version `0.10.0` or greater.

## References
- [Seclists](http://seclists.org/oss-sec/2013/q3/248)
- [Github Commit](https://github.com/openstack/python-glanceclient/commit/822cd6)
