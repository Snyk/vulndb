## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Affected versions of this package are vulnerable to Open Redirect.
In multiple places, Plone blindly uses the referer header to redirect a user to the next page after a particular action. An attacker could utilize this to draw a user into a redirection attack.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7137)
- [Plone Security Advisory](https://plone.org/security/hotfix/20160830/open-redirection-in-plone)
- [Seclists](http://seclists.org/fulldisclosure/2016/Oct/80)
