## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

The batch id change script (renameObjectsByPaths.py) in Plone before 4.2.3 and 4.3 before beta 1 allows remote attackers to change the titles of content items by leveraging a valid CSRF token in a crafted request.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5500)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/11/10/1)
- [Github Changelog](https://github.com/plone/Products.CMFPlone/blob/4.2.3/docs/CHANGES.txt)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/CVE-2012-5500)
