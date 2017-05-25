## Overview
[`org.bouncycastle:bcprov-jdk14`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22bcprov-jdk14%22)
The Bouncy Castle Java library before 1.51 does not validate a point is withing the elliptic curve, which makes it easier for remote attackers to obtain private keys via a series of crafted elliptic curve Diffie Hellman (ECDH) key exchanges, aka an "invalid curve attack."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-7940)