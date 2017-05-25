## Overview
[`org.cloudfoundry.identity:cloudfoundry-identity-login`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cloudfoundry-identity-login%22)
The OAuth authorization implementation in Pivotal Cloud Foundry (PCF) before 242; UAA 2.x before 2.7.4.7, 3.x before 3.3.0.5, and 3.4.x before 3.4.4; UAA BOSH before 11.5 and 12.x before 12.5; Elastic Runtime before 1.6.40, 1.7.x before 1.7.21, and 1.8.x before 1.8.1; and Ops Manager 1.7.x before 1.7.13 and 1.8.x before 1.8.1 mishandles redirect_uri subdomains, which allows remote attackers to obtain implicit access tokens via a modified subdomain.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6636)
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2016-6636)
