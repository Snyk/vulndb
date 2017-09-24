## Overview
[`products.cmfformcontroller`](https://pypi.python.org/pypi/products.cmfformcontroller) is a CMFFormController provides a form validation mechanism for CMF.

Affected versions of this project are vulnerable to Open Redirection.
Multiple open redirect vulnerabilities in Plone CMS 5.x through 5.0.6, 4.x through 4.3.11, and 3.3.x through 3.3.6 allow remote attackers to redirect users to arbitrary web sites and conduct phishing attacks via a URL in the referer parameter to (1) %2b%2bgroupdashboard%2b%2bplone.dashboard1%2bgroup/%2b/portlets.Actions or (2) folder/%2b%2bcontextportlets%2b%2bplone.footerportlets/%2b /portlets.Actions or the (3) came_from parameter to /login_form.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-7137)
- [Plone Vulnerability issue](https://plone.org/security/hotfix/20160830/open-redirection-in-plone)
