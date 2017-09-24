## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.
Plone's URL checking infrastructure includes a method for checking if URLs valid and located in the Plone site. By passing HTML into this specially crafted url, XSS can be achieved. Versions affected are Plone 3.x, 4.1.x, 4.2.x, <4.3.7, <5.0rc1.


## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-7316)
- [Seclists](http://seclists.org/oss-sec/2015/q3/587)
- [Github Commit](https://github.com/plone/Products.CMFPlone/commit/3da710a2cd68587f0bf34f2e7ea1167d6eeee087)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/CVE-2015-7316)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1264788)
