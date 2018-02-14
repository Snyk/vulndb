## Overview
[plone](https://github.com/plone/Plone) is a Content Management System running on top of Python and Zope.

Affected versions of this package are vulnerable to Sandbox escape. Accessing private content via str.format in through-the-web templates and scripts.

## Remediation
Upgrade `plone` to versions 4.3.16, 5.1.0 or higher.

## References
- [Plone Security Advisory](https://plone.org/security/hotfix/20171128/sandbox-escape)
- [Plone Hotfix](https://plone.org/security/hotfix/20171128)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000483)
