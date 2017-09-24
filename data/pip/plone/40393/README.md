## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Affected versions of this package are vulnerable to Access Restriction Bypass.
Dexterity content is missing security declarations for WebDAV requests. This only affects Dexterity objects.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4041)
- [Plone Security Advisory](https://plone.org/security/hotfix/20160419/privilege-escalation-in-webdav)
