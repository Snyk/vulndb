## Overview
[`org.apache.ws.security:wss4j`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wss4j%22)
Affected versions of the package use a Risky Cryptographic Algorithm. The `PKCS#1 v1.5 Key Transport` Algorithm is used to encrypt symmetric keys as part of WS-Security. WSS4J can leak information about where a particular decryption operation fails.

## References
- [Apache Security Advisory](http://cxf.apache.org/note-on-cve-2011-2487.html)
