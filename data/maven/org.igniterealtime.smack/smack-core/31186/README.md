## Overview
[`org.igniterealtime.smack:smack-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22smack-core%22)
The ServerTrustManager component in the Ignite Realtime Smack XMPP API before 4.0.0-rc1 does not verify basicConstraints and nameConstraints in X.509 certificate chains from SSL servers, which allows man-in-the-middle attackers to spoof servers and obtain sensitive information via a crafted certificate chain.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0363)
