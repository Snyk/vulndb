## Overview
[`com.ning:async-http-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22async-http-client%22)
main/java/com/ning/http/client/AsyncHttpClientConfig.java in Async Http Client (aka AHC or async-http-client) before 1.9.0 does not require a hostname match during verification of X.509 certificates, which allows man-in-the-middle attackers to spoof HTTPS servers via an arbitrary valid certificate.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-7398)
- [Github Commit](https://github.com/AsyncHttpClient/async-http-client/issues/197)
- [Github Commit](https://github.com/AsyncHttpClient/async-http-client/commit/dfacb8e05d0822c7b2024c452554bd8e1d6221d8)
- [OSS Security](http://openwall.com/lists/oss-security/2014/08/26/1)
