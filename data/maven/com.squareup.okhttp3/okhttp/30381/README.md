## Overview
[`com.squareup.okhttp:okhttp`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22okhttp%22)
OkHttp before 2.7.4 and 3.x before 3.1.2 allows man-in-the-middle attackers to bypass certificate pinning by sending a certificate chain with a certificate from a non-pinned trusted CA and the pinned certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2402)
- [John Kozyrakis Blog](https://koz.io/pinning-cve-2016-2402/)
- [Jesse Wilson Blog](https://publicobject.com/2016/02/11/okhttp-certificate-pinning-vulnerability/)
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/02/10/8)
- [GitHub Issue](https://github.com/square/okhttp/issues/1699)
- [GitHub Commit #1](https://github.com/square/okhttp/commit/e121ed1ad291cbe04de989683d23f549d8e305db)
- [GitHub Commit #2](https://github.com/square/okhttp/commit/18b2660873ed8f028ee72981c882ed676aa08030)
- [GitHub Commit #3](https://github.com/square/okhttp/commit/a7d3396047a75183398f339310774ee415c1c4e8)
