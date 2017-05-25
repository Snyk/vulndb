## Overview
[`org.cloudfoundry.identity:cloudfoundry-identity-login`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cloudfoundry-identity-login%22)
Affected versions of the package are vulnerable to Cross-site Request Forgery (CSRF). It is possible to log the user into another account instead of the account they intended to log into because due to lack of CSRF checks.

## References
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2015-5170-5173)
