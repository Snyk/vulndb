## Overview
[`peppercorn`](https://pypi.python.org/pypi/peppercorn) is a library for converting a token stream into a data structure for use in web form posts.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.

## Details
Denial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its original and legitimate users. There are many types of DoS attacks, ranging from trying to clog the network pipes to the system by generating a large volume of traffic from many machines (a Distributed Denial of Service - DDoS - attack) to sending crafted requests that cause a system to crash or take a disproportional amount of time to process. The latter, is caused by flawed code written by you or open source package owners, without any intention of harm.

When it comes to open source security, DoS vulnerabilities allow attackers to trigger such a crash or CPU starvation, crippling the service by using a flaw in the open source code originating from open source libraries.


## References
- [Github ChangeLog](https://github.com/Pylons/peppercorn/blob/master/CHANGES.rst#05-2014-09-29)
- [Github PR](https://github.com/Pylons/peppercorn/pull/7)
- [Github Commit](https://github.com/Pylons/peppercorn/commit/d07cb55cee4f9b47b71d9fb7280aee6ab0799baf)
