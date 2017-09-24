## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

typeswidget.py in Plone 2.1 through 4.1, 4.2.x through 4.2.5, and 4.3.x through 4.3.1 does not properly enforce the immutable setting on unspecified content edit forms, which allows remote attackers to hide fields on the forms via a crafted URL.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4193)
- [Seclists](http://seclists.org/oss-sec/2013/q3/261)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=978469)
