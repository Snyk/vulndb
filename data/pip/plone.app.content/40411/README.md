## Overview
[`plone.app.content`](https://pypi.python.org/pypi/plone.app.content) is a Content Views for Plone.

Affected versions of this package are vulnerable to Directory Traversal attacks. It allows remote administrators to read arbitrary files via a .. (dot dot) in the path parameter in a getFile action to `Plone/++theme++barceloneta/@@plone.resourceeditor.filemanager-actions`.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7135)
- [Plone Vulnerability issue](https://plone.org/security/hotfix/20160830/filesystem-information-leak)
- [Seclists](http://seclists.org/oss-sec/2016/q3/417)
