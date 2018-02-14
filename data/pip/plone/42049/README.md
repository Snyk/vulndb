## Overview
[plone](https://github.com/plone/Plone) is a Content Management System running on top of Python and Zope.

Affected versions of this package are vulnerable to Open Redirect and reflected Cross-site Scripting (XSS) attacks.
An attacker might persuade a user to click on a specially crafted link, and get him redirect to a malicious site. 

## Remediation
Upgrade `plone` to versions 4.3.16, 5.0.10 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000481)
- [Plone](https://plone.org/security/hotfix/20171128/open-redirection-on-login-form)
- [Plone Fixes](https://plone.org/security/hotfix/20171128)
