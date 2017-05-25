## Overview
[`org.picketlink:picketlink-tomcat-common`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22picketlink-tomcat-common%22)
The (1) Service Provider (SP) and (2) Identity Provider (IdP) in PicketLink before 2.7.0 does not ensure that the Destination attribute in a Response element in a SAML assertion matches the location from which the message was received, which allows remote attackers to have unspecified impact via unknown vectors.  NOTE: this identifier was SPLIT from CVE-2015-0277 per ADT2 due to different vulnerability types.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-6254)