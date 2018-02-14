## Overview
[plone](https://github.com/plone/Plone) is a Content Management System running on top of Python and Zope.

Affected versions of this package are vulnerable to Open Redirect. By linking to a specific url in Plone with a parameter, an attacker could send the user to his own website.

## Remediation
Upgrade `plone` to versions 4.3.16, 5.1 or higher.

## References
- [Plone Security Advisory](https://plone.org/security/hotfix/20171128/an-open-redirection-when-calling-a-specific-url)
- [Plone Hotfix](https://plone.org/security/hotfix/20171128)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000484)
