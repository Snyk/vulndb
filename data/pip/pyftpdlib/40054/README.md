## Overview
[`pyftpdlib`](https://pypi.python.org/pypi/pyftpdlib) is a Very fast asynchronous FTP server library.

Race condition in the FTPHandler class in ftpserver.py in pyftpdlib before 0.5.2 allows remote attackers to cause a denial of service (daemon outage) by establishing and then immediately closing a TCP connection, leading to the accept function having an unexpected value of None for the address, or an ECONNABORTED, EAGAIN, or EWOULDBLOCK error, a related issue to CVE-2010-3492.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-3494)
- [Python Issue](http://bugs.python.org/issue6706)
- [Github Issue](https://github.com/giampaolo/pyftpdlib/issues/105)
- [Github Commit](https://github.com/giampaolo/pyftpdlib/commit/0f822329e3431ec1bc6250c03e938c65a61b2eb4)
