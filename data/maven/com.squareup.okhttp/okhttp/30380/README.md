## Overview
[`com.squareup.okhttp:okhttp`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22okhttp%22)
OkHttp before 2.7.4 and 3.x before 3.1.2 allows man-in-the-middle attackers to bypass certificate pinning by sending a certificate chain with a certificate from a non-pinned trusted CA and the pinned certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=undefined)
- [John Kozyrakis Blog](https://koz.io/pinning-cve-2016-2402/)
- [Jesse Wilson Blog](https://publicobject.com/2016/02/11/okhttp-certificate-pinning-vulnerability/)
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/02/10/8)
- [Github Issue](https://github.com/square/okhttp/issues/1699)
- [Github Commit #1](https://github.com/square/okhttp/commit/62b42bf27589fd8128f6d1a202455c5731c890c2)
- [Github Commit #2](https://github.com/square/okhttp/commit/ddbabf77803112fe804d1f44e5071244b00b9cfb)
- [Github Commit #3](https://github.com/square/okhttp/commit/a2bf207c980e4d2a0ecf457eadae9048e63d09aa)
