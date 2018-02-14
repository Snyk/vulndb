## Overview
[`org.asynchttpclient:async-http-client-project`](https://github.com/AsyncHttpClient/async-http-client) is an Async Http Client (AHC) library's purpose is to allow Java applications to easily execute HTTP requests and asynchronously process the response.

Affected versions of the package are vulnerable to Server Side Request Forgery (SSRF).

Async Http Client (aka async-http-client) before 2.0.35 can be tricked into connecting to a host different from the one extracted by java.net.URI if a '?' character occurs in a fragment identifier. Similar bugs were previously identified in cURL (CVE-2016-8624) and Oracle Java 8 java.net.URL.

## Remediation
Upgrade `org.asynchttpclient:async-http-client-project` to version 2.0.35 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-14063)
- [Github Issue](https://github.com/AsyncHttpClient/async-http-client/issues/1455)
- [Github Commit](https://github.com/AsyncHttpClient/async-http-client/commit/e9f12b29725c567cdb4de98b3302a61ca9d41280)
