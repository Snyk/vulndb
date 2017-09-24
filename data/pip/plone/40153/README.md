## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

python_scripts.py in Plone before 4.2.3 and 4.3 before beta 1 allows remote attackers to cause a Denial of Service (infinite loop) via an RSS feed request for a folder the user does not have permission to access.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5506)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/11/10/1)
- [Github Changelog](https://github.com/plone/Products.CMFPlone/blob/4.2.3/docs/CHANGES.txt)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/CVE-2012-5506)
