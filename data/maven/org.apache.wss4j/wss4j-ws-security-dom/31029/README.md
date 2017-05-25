## Overview
[`org.apache.wss4j:wss4j-ws-security-dom`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wss4j-ws-security-dom%22)
Affected versions of the package use a Risky Cryptographic Algorithm. The `PKCS#1 v1.5 Key Transport` Algorithm is used to encrypt symmetric keys as part of WS-Security. WSS4J can leak information about where a particular decryption operation fails.

## References
- [Apache Security Advisory](https://ws.apache.org/wss4j/advisories/CVE-2015-0226.txt.asc)
