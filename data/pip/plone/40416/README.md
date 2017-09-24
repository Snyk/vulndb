## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.

z3c.form will currently accept data from GET requests when the form is supposed to be POST. This allows a user to inject a potential XSS attack into a form. With certain widgets in Plone admin forms, the input is expected to be safe and can cause a reflexive XSS attack. Additionally, there is potential for an attack that will trick a user into saving a persistent XSS.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7136)
- [Plone Security Advisory](https://plone.org/security/hotfix/20160830/non-persistent-xss-in-plone-forms)
- [Seclists](http://seclists.org/fulldisclosure/2016/Oct/80)
