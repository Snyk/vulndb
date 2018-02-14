## Overview
[`httplib2`](https://pypi.python.org/pypi/httplib2) is a comprehensive HTTP client library.

httplib2 0.7.2, 0.8, and earlier, after an initial connection is made, does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2037)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-2037)
- [Openwall](http://openwall.com/lists/oss-security/2013/05/01/5)
