## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.
Plone's URL checking infrastructure includes a method for checking if URLs valid and located in the Plone site. By passing javascript into this specially crafted url, XSS can be achieved.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7138)
- [Plone Security Advisory](https://plone.org/security/hotfix/20160830/non-persistent-xss-in-plone-1)
- [Seclists](http://seclists.org/fulldisclosure/2016/Oct/80)
