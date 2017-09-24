## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Affected versions of this package are vulnerable to Bypass Restricted Python.
This vulnerability should only affect site administrators who have ZMI access, or when you gave users permission to edit PloneFormGen templates. Only Chameleon (five.pt) is affected. This package is used by default in Plone 5, and can be added in Plone 4.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4043)
- [Plone Security Advisory](https://plone.org/security/hotfix/20160419/bypass-restricted-python)
