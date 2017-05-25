## Overview
[`org.apache.axis:axis`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22axis%22)
The getCN function in Apache Axis 1.4 and earlier does not properly verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via a certificate with a subject that specifies a common name in a field that is not the CN field.  NOTE: this issue exists because of an incomplete fix for CVE-2012-5784.

## References

- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3596)
- [Axis Issue](https://issues.apache.org/jira/browse/AXIS-2905)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-3596)
