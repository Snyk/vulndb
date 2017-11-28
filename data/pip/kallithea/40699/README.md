## Overview
[`Kallithea`](http://pypi.python.org/pypi/Kallithea) is a fast and powerful management tool for Mercurial and Git with a built in push/pull server, full text search and code-review.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF) attacks. The lack of CSRF protection in the POST forms aenabled attackers trick users into performing a specific action, and changing their input in the HTTP POST request.

## Remediation
Upgrade `Kallithea` to version 0.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-0276)
- [Kallithea CVE](https://kallithea-scm.org/security/cve-2015-0276.html)
- [BitBucket Commit](https://bitbucket.org/conservancy/kallithea/commits/ae947de541d5630e5505c7c8ded05cd37c7f232b?at&#x3D;0.2)
