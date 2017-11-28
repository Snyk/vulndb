## Overview
[`ZODB`](https://pypi.python.org/pypi/ZODB) is a Python object-oriented database.

Affected versions of this package are vulnerable to Denial of Service (DoS).

Race condition in ZEO/StorageServer.py in Zope Object Database (ZODB) before 3.10.0 allows remote attackers to cause a denial of service (daemon outage) by establishing and then immediately closing a TCP connection, leading to the accept function having an unexpected return value of None, an unexpected value of None for the address, or an ECONNABORTED, EAGAIN, or EWOULDBLOCK error, a related issue to CVE-2010-3492.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2010-3495)
