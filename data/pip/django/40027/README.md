## Overview
[`Django`](https://pypi.python.org/pypi/Django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to SQL Injection attacks.
The `FilePathField`, `GenericIPAddressField`, and `IPAddressField` model field classes in Django do not properly perform type conversion, which allows remote attackers to have unspecified impact and vectors, related to "MySQL typecasting."

## Remediation
Upgrade to versions `1.7b2`, `1.6.3`, `1.5.6`, `1.4.11` or greater.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/apr/21/security/)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0474)
- [Redhat Vulnerability Advisory](https://rhn.redhat.com/errata/RHSA-2014-0456.html)
