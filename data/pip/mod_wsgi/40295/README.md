## Overview
[`mod_wsgi`](https://pypi.python.org/pypi/mod_wsgi) is a Installer for Apache/mod_wsgi.
mod_wsgi before 4.2.4 for Apache, when creating a daemon process group, does not properly handle when group privileges cannot be dropped, which might allow attackers to gain privileges via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-8583)
- [Redhat](https://access.redhat.com/security/cve/CVE-2014-8583)
- [GitHub Commit](https://github.com/GrahamDumpleton/mod_wsgi/commit/545354a80b9cc20d8b6916ca30542eab36c3b8bd)
