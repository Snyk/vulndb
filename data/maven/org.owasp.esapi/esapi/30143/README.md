## Overview
[`org.owasp.esapi:esapi`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22esapi%22)
The authenticated-encryption feature in the symmetric-encryption implementation in the OWASP Enterprise Security API (ESAPI) for Java 2.x before 2.1.1 does not properly resist tampering with serialized ciphertext, which makes it easier for remote attackers to bypass intended cryptographic protection mechanisms via an attack against the intended cipher mode in a non-default configuration, a different vulnerability than CVE-2013-5679.

## References

- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-5960)
- [Synacktiv Vulnerability Description](http://www.synacktiv.com/ressources/synacktiv_owasp_esapi_hmac_bypass.pdf)
- [Kevin W. Wall Blog](http://off-the-wall-security.blogspot.ca/2014/03/esapi-no-longer-owasp-flagship-project.html)
