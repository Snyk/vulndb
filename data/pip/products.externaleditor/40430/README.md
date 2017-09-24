## Overview
[`products.externaleditor`](https://pypi.python.org/pypi/products.externaleditor) is a Zope External Editor.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.
Multiple cross-site scripting (XSS) vulnerabilities in the ZMI page in Zope2 in Plone CMS 5.x through 5.0.6, 4.x through 4.3.11, and 3.3.x through 3.3.6 allow remote attackers to inject arbitrary web script or HTML via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7140)
- [Plone Issue](https://plone.org/security/hotfix/20160830/non-persistent-xss-in-zope2)
- [Github PR](https://github.com/zopefoundation/Products.ExternalEditor/pull/3)
- [Github Commit](https://github.com/zopefoundation/Products.ExternalEditor/pull/3/commits/48eef2061b0ebbe88eddc62df2ae5fe88a54ba73)
