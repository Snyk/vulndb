## Overview
[`kallithea`](http://pypi.python.org/pypi/Kallithea) is a fast and powerful management tool for Mercurial and Git with a built in push/pull server, full text search and code-review.

Affected Versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.
Multiple cross-site scripting (XSS) vulnerabilities in the administration pages in Kallithea before 0.2.1 allow remote attackers to inject arbitrary web script or HTML via the (1) first name or (2) last name user details, or the (3) repository, (4) repository group, or (5) user group description.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `kallithea` to version 0.2.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-1864)
- [Kallithea Security Notice](https://kallithea-scm.org/security/cve-2015-1864.html)
