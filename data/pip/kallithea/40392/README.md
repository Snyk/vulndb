## Overview
[`kallithea`](https://pypi.python.org/pypi/kallithea) is a fast and powerful management tool for Mercurial and Git with a built-in push/pull server, full text search and code-review.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) attacks. It allows remote attackers to bypass the CSRF protection by using the GET HTTP request method.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3691)
- [Kallithea CVE](https://kallithea-scm.org/security/cve-2016-3691.html)
- [Kallithea Commit](https://kallithea-scm.org/repos/kallithea/changeset/9b74296e6af624023970d8634e804b76ed2dd2b4)
