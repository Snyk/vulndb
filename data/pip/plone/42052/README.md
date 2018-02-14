## Overview
[plone](https://github.com/plone/Plone) is a Content Management System running on top of Python and Zope.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS). An attacker may set javascript in the `home_page` property of his profile, and have this executed when a visitor click the home page link on the author page.

## Remediation
Upgrade `plone` to version 4.3.16, 5.1.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000482)
- [Plone Security Advisory](https://plone.org/security/hotfix/20171128/xss-using-the-home_page-member-property)
- [Plone Hotfix](https://plone.org/security/hotfix/20171128)
