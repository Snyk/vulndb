## Overview
[`org.picketlink:picketlink-federation`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22picketlink-federation%22)
The Service Provider (SP) in PicketLink before 2.7.0 does not ensure that it is a member of an Audience element when an AudienceRestriction is specified, which allows remote attackers to log in to other users' accounts via a crafted SAML assertion.  NOTE: this identifier has been SPLIT per ADT2 due to different vulnerability types. See CVE-2015-6254 for lack of validation for the Destination attribute in a Response element in a SAML assertion.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0277)