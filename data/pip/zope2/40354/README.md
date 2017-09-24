## Overview
[`zope2`](https://pypi.python.org/pypi/zope2) is a Zope2 application server / web framework
Affected versions of this package are vulnerable to HTTP header Injection attacks due to incorrectly escaping of Carriage Return and Line Feed (CR/LF) characters in HTTP requests.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-7318)
- [Plone Security Advisory](https://plone.org/security/hotfix/20150910/header-injection)
