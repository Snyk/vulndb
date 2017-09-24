## Overview
[`ovirt-engine-sdk`](https://pypi.python.org/pypi/ovirt-engine-sdk) is a SDK interface to oVirt Virtualization.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM).  
It was reported that oVirt's Python SDK does not verify that the hostname of the remote endpoint matches the Common Name (CN) or subjectAltName as specified by its x.509 certificate in a TLS/SSL session.  This could allow man-in-the-middle attackers to spoof remote endpoints via an arbitrary yet valid certificate.

## References
- [Redhat bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1083303)
