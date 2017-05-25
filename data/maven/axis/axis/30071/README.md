## Overview
[`axis:axis`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22axis%22) is an implementation of the SOAP ("Simple Object Access Protocol") submission to W3C.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks because it does not verify the requesting server's hostname agains existing domain names in the SSL Certificate. 

## Details
The `getCN` function in Apache Axis 1.4 and earlier does not properly verify that the server hostname matches a domain name in the subject's `Common Name (CN)` or `subjectAltName` field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via a certificate with a subject that specifies a common name in a field that is not the CN field.  

**NOTE:** this issue exists because of an incomplete fix for [CVE-2012-5784](https://snyk.io/vuln/SNYK-JAVA-AXIS-30189).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3596)
- [Axis Issue](https://issues.apache.org/jira/browse/AXIS-2905)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-3596)
