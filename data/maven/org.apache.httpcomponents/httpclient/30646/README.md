## Overview
[`org.apache.httpcomponents:httpclient`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22httpclient%22)
Affected versions of this project are vulnerable to Man-in-the-Middle (MitM) attacks because it does not verify the requesting server's hostname agains existing domain names in the SSL Certificate.

## Details
The `AbstractVerifier` in Apache Commons HttpClient before 4.3.5 and HttpAsyncClient before 4.0.2 does not properly verify that the server hostname matches a domain name in the subject's `Common Name (CN)` or `subjectAltName` field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via a `"CN="` string in a field in the distinguished name (DN) of a certificate, as demonstrated by the `"foo,CN=www.apache.org"` string in the `O` field.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3577)
