## Overview
[`org.bouncycastle:bcprov-jdk15on`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22bcprov-jdk15on%22)
Affected versions of this package are vulnerable to Invalid Curve Attacks.

## Details
Elliptic Curve Cryptography (ECC) is used in key exchange protocolsdigital signatures, or for pseudo-random number generators. An elliptic curve in cryptography is a set of points over a finite field satisfying the following equation: `y^2 = x^3 + ax + b`. On the elliptic curve, a single operation can be executed: point addition.

Elliptic curve Diffie–Hellman (ECDH) is an anonymous key exchange protocol that allows two parties (say, between a client and server) to establish a shared secret over an insecure channel.

An Invalid Curve Attack occurs when a client forces the server to compute a common secret using a point outside of the defined curve. The server may disclose information, allowing a skilled attacker to calculate the secret key.

## References
- [Juraj Somorovsky's Blog](http://web-in-security.blogspot.co.il/2015/09/practical-invalid-curve-attacks.html)
- [OSS Security](http://www.openwall.com/lists/oss-security/2015/10/22/7)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-7940)
