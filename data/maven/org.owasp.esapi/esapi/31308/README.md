## Overview
[`org.owasp.esapi:esapi`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22esapi%22)
The authenticated-encryption feature in the symmetric-encryption implementation in the OWASP Enterprise Security API (ESAPI) for Java 2.x before 2.1.0 does not properly resist tampering with serialized ciphertext, which makes it easier for remote attackers to bypass intended cryptographic protection mechanisms via an attack against authenticity in the default configuration, involving a null MAC and a zero MAC length.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-5679)