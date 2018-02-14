## Overview
Affected version of [`github.com/square/go-jose`](https://github.com/square/go-jose) are vulnerable to Elliptic Curve Key Disclosure.
go-jose before 1.0.4 suffers from an invalid curve attack for the ECDH-ES algorithm. When deriving a shared key using ECDH-ES for an encrypted message, go-jose neglected to check that the received public key on a message is on the same curve as the static private key of the receiver, thus making it vulnerable to an invalid curve attack.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9121)
- [GitHub Commit](https://github.com/square/go-jose/commit/c7581939a3656bb65e89d64da0a52364a33d2507)
- [HackerOne Report](https://hackerone.com/reports/164590)
- [Openwall](http://www.openwall.com/lists/oss-security/2016/11/03/1)
