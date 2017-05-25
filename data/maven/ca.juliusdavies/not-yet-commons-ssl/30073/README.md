## Overview
[`ca.juliusdavies:not-yet-commons-ssl`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22not-yet-commons-ssl%22) a Java SSL component library.
Certificates.java in Not Yet Commons SSL before 0.3.15 does not properly verify that the server hostname matches a domain name in the subject's Common Name (CN) field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3604)
