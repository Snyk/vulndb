## Overview
[`com.ning:async-http-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22async-http-client%22)
Async Http Client (aka AHC or async-http-client) before 1.9.0 skips X.509 certificate verification unless both a keyStore location and a trustStore location are explicitly set, which allows man-in-the-middle attackers to spoof HTTPS servers by presenting an arbitrary certificate during use of a typical AHC configuration, as demonstrated by a configuration that does not send client certificates.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-7397)
- [OSS Security](http://openwall.com/lists/oss-security/2014/08/26/1)
- [Github Issue](https://github.com/AsyncHttpClient/async-http-client/issues/352)
- [Github Commit](https://github.com/AsyncHttpClient/async-http-client/commit/dfacb8e05d0822c7b2024c452554bd8e1d6221d8)
