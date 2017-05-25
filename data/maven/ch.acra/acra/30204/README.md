## Overview
[`ch.acra:acra`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22acra%22) publishes a report of an Android application crash to Google docs (or some other end point).
The ACRA library for Android does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5812)
- [GitHub Commit](https://github.com/ACRA/acra/commit/fff732595164baf233d911386a3965dc516cf081)
- [University of Texas](http://www.cs.utexas.edu/~shmat/shmat_ccs12.pdf)
