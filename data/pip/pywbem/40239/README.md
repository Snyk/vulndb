## Overview
[`pywbem`](https://pypi.python.org/pypi/pywbem) is a pywbem - A WBEM client
PyWBEM 0.7 and earlier does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-6444)
- [Seclists](http://seclists.org/oss-sec/2013/q4/524)
- [Oracle Security Advisory](http://www.oracle.com/technetwork/topics/security/bulletinjan2016-2952098.html)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1044246)
