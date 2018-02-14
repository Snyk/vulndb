## Overview
Affected versions of [`passlib`](https://pypi.python.org/pypi/passlib) are vulnerable to Denial of Service (DoS) attack.

`passlib` is enable `wildcard password` by default, which allows remote attackers to cause a denial of service (CPU consumption) via multiple wildcard characters in the common name in a certificate.

## Details
Denial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its original and legitimate users. There are many types of DoS attacks, ranging from trying to clog the network pipes to the system by generating a large volume of traffic from many machines (a Distributed Denial of Service - DDoS - attack) to sending crafted requests that cause a system to crash or take a disproportional amount of time to process. The latter, is caused by flawed code written by you or open source package owners, without any intention of harm.

When it comes to open source security, DoS vulnerabilities allow attackers to trigger such a crash or CPU starvation, crippling the service by using a flaw in the open source code originating from open source libraries.

## Remediation
Upgrade `passlib` to version 1.4 or higher.

## References
- [Readthedocs Passlib ChangeLog](http://passlib.readthedocs.io/en/stable/history/ancient.html#hashes)
- [BitBucket Commit](https://bitbucket.org/ecollins/passlib/commits/aca22d57fc1d110be722d71180185f411a3374b7?at=1.4)
