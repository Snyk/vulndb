## Overview
[`pywbem`](https://pypi.python.org/pypi/pywbem) is a pywbem - A WBEM client
PyWBEM 0.7 and earlier uses a separate connection to validate X.509 certificates, which allows man-in-the-middle attackers to spoof a peer via an arbitrary certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-6418)
- [Seclists](http://seclists.org/oss-sec/2013/q4/531)
- [Oracle Security Advisory](http://www.oracle.com/technetwork/topics/security/bulletinjan2016-2867206.html)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1039801)
