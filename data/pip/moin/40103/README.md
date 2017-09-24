## Overview
[`moin`](https://pypi.python.org/pypi/moin) is an easy to use, full-featured and extensible wiki software package.

security/__init__.py in MoinMoin 1.9 through 1.9.4 does not properly handle group names that contain virtual group names such as "All," "Known," or "Trusted," which allows remote authenticated users with virtual group membership to be treated as a member of the group.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-4404)
- [Moin Issue](http://hg.moinmo.in/moin/1.9/rev/7b9f39289e16) 
