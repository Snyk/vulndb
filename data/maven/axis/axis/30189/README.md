## Overview
[`axis:axis`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22axis%22) is an implementation of the SOAP ("Simple Object Access Protocol") submission to W3C.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks because it does not verify the requesting server's hostname agains existing domain names in the SSL Certificate.

## Details
Apache Axis 1.4 and earlier does not properly verify that the server hostname matches a domain name in the subject's `Common Name (CN)` or `subjectAltName` field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5784)
- [Texas University](http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf)
- [Jira Issue](https://issues.apache.org/jira/browse/AXIS-2883)
