## Overview
[`Django`](https://pypi.python.org/pypi/Django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Arbitrary Code Execution attacks. The `django.core.urlresolvers.reverse` function allows remote attackers to import and execute arbitrary Python modules by leveraging a view that constructs URLs using user input and a "dotted Python path."

## Remediation
Upgrade to versions `1.7b2`, `1.6.3`, `1.5.6`, `1.4.11` or greater.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/apr/21/security/)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0472)
- [Redhat Vulnerability Advisory](https://rhn.redhat.com/errata/RHSA-2014-0456.html)
