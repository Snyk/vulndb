## Overview
[`zope2`](https://pypi.python.org/pypi/zope2) is a Zope2 application server / web framework
The object manager implementation (objectmanager.py) in Plone 2.1 through 4.1, 4.2.x through 4.2.5, and 4.3.x through 4.3.1 does not properly restrict access to internal methods, which allows remote attackers to obtain sensitive information via a crafted request.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4196)
- [Seclists](http://seclists.org/oss-sec/2013/q3/261)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=978475)
