## Overview
[`kallithea`](https://pypi.python.org/pypi/kallithea) is a fast and powerful management tool for Mercurial and Git with a built-in push/pull server, full text search and code-review.

Affected versions of this package are vulnerable to Privilege Escalation. It allows remote authenticated users to edit or delete open pull requests or delete comments by leveraging read access.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3114)
- [Kallithea Commit](https://kallithea-scm.org/repos/kallithea/changeset/81057be7a5c10e1cd08d32c923468e41cf417ed1)
