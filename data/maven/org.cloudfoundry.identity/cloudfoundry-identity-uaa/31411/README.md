## Overview
[`org.cloudfoundry.identity:cloudfoundry-identity-uaa`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cloudfoundry-identity-uaa%22)
Affected versions of this package are vulnerable to session fixation attacks via the User Account and Authentication (UAA). When UAA is configured to authenticate against external SAML or OpenID Connect based identity providers.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-4963)
- [CloudFoundry Security Advisory](https://www.cloudfoundry.org/cve-2017-4963/)
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2017-4963)
- [GitHub Release Notes 2.7.4.13](https://github.com/cloudfoundry/uaa/releases/tag/2.7.4.13)
