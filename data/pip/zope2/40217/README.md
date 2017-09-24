## Overview
[`zope2`](https://pypi.python.org/pypi/zope2) is a Zope2 application server / web framework
(1) cb_decode.py and (2) linkintegrity.py in Plone 2.1 through 4.1, 4.2.x through 4.2.5, and 4.3.x through 4.3.1 allow remote authenticated users to cause a denial of service (resource consumption) via a large zip archive, which is expanded (decompressed).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4199)
- [Seclists](http://seclists.org/oss-sec/2013/q3/261)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=978482)
