## Overview
[`commons-httpclient:commons-httpclient`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22commons-httpclient%22)
Apache Commons HttpClient 3.x, as used in Amazon Flexible Payments Service (FPS) merchant Java SDK and other products, does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References

- [The University of Texas](http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf)
- [X-Force Vulnerability Report](https://exchange.xforce.ibmcloud.com/vulnerabilities/79984)
- [Jira Issue](https://issues.apache.org/jira/browse/HTTPCLIENT-1265)
