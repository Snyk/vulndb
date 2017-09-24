## Overview
[`zope2`](https://pypi.python.org/pypi/zope2) is a Zope2 application server / web framework
The App.Undo.UndoSupport.get_request_var_or_attr function in Zope before 2.12.21 and 3.13.x before 2.13.11, as used in Plone before 4.2.3 and 4.3 before beta 1, allows remote authenticated users to gain access to restricted attributes via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5489)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/11/10/1)
- [GitHub Changelog](https://github.com/plone/Products.CMFPlone/blob/4.2.3/docs/CHANGES.txt)
