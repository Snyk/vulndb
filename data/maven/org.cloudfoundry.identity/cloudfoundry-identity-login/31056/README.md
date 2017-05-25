## Overview
[`org.cloudfoundry.identity:cloudfoundry-identity-login`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22cloudfoundry-identity-login%22)
Affected versions of the package are vulnerable to Cross-site Request Forgery (CSRF) via the `change_email` form. An attacker may trigger an e-mail change for a olgged in user via a malicious link on a attacker controlled site.

## References
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2015-3191)
