## Overview
[`org.cloudfoundry.identity:cloudfoundry-identity-server`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cloudfoundry-identity-server%22)
Affected versions of this package are vulnerable to Blind SQL Injection attacks via the User Account and Authentication (UAA). The `client_id` string was not properly validated.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-4972)
- [CloudFoundry Security Advisory](https://www.cloudfoundry.org/CVE-2017-4972)
