## Overview
[`org.igniterealtime.smack:smack-tcp`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22smack-tcp%22)
The Ignite Realtime Smack XMPP API 4.x before 4.0.2, and 3.x and 2.x when a custom SSLContext is used, does not verify that the server hostname matches a domain name in the subject's Common Name (CN) or subjectAltName field of the X.509 certificate, which allows man-in-the-middle attackers to spoof SSL servers via an arbitrary valid certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-5075)
- [Op-co.de](http://op-co.de/CVE-2014-5075.html)
