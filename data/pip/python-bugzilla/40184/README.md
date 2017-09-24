## Overview
[`python-bugzilla`](https://pypi.python.org/pypi/python-bugzilla) is a Bugzilla XMLRPC access module.

python-bugzilla before 0.9.0 does not validate X.509 certificates, which allows Man-in-the-Middle (MitM) attackers to spoof Bugzilla servers via a crafted certificate.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2191)
- [Github Commit](https://github.com/python-bugzilla/python-bugzilla/commit/a782282ee479ba4cc1b8b1d89700ac630ba83eef)
