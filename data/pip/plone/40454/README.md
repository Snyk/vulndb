## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Affected versions of this package are vulnerable to Sandbox Bypass.
Plone 4.x through 4.3.11 and 5.x through 5.0.6 allow remote attackers to bypass a sandbox protection mechanism and obtain sensitive information by leveraging the Python string format method.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5524)
- [Plone Security Advisory](https://plone.org/security/hotfix/20170117/sandbox-escape)
- [Openwall](http://www.openwall.com/lists/oss-security/2017/01/18/6)
