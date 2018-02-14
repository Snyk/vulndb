## Overview
[`org.bouncycastle:bctls-jdk15on`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22bctls-jdk15on%22)

BouncyCastle TLS prior to version 1.0.3, when configured to use the JCE (Java Cryptography Extension) for cryptographic functions, provides a weak Bleichenbacher oracle when any TLS cipher suite using RSA key exchange is negotiated. An attacker can recover the private key from a vulnerable application. This vulnerability is referred to as ROBOT.

## Remediation
A fix was merged to the master branch but not yet published to Maven Central.

## References
- [GitHub Commit](https://github.com/bcgit/bc-java/commit/a00b684465b38d722ca9a3543b8af8568e6bad5c)
- [ROBOT Attack](https://robotattack.org/)
