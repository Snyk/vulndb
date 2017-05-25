## Overview
[`org.opensaml:opensaml`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22opensaml%22)
The (1) BasicParserPool, (2) StaticBasicParserPool, (3) XML Decrypter, and (4) SAML Decrypter in Shibboleth OpenSAML-Java before 2.6.1 set the expandEntityReferences property to true, which allows remote attackers to conduct XML external entity (XXE) attacks via a crafted XML DOCTYPE declaration.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-6440)