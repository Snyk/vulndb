## Overview
[`org.cloudfoundry.identity:cloudfoundry-identity-uaa`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cloudfoundry-identity-uaa%22)
Affected versions of this package are vulnerable to Privilege Escalations via the User Account and Authentication (UAA). Any user could pass a malicious token to a group endpoint, causing an elevation of privileges.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-4973)
- [CloudFoundry Security Advisory](https://www.cloudfoundry.org/CVE-2017-4973)
