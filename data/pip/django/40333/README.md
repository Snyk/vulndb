## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to HTTP Response Splitting attacks due to the use of an incorrect regular expression. It allows newline characters in email messages (to the `EmailValidator`), in URLs (to the `URLValidator`), or other instances. An attacker can leverage this to inject arbitrary headers and conduct HTTP response splitting attacks.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2015/jul/08/security-releases/)
- [Oracle Security Bulletin](http://www.oracle.com/technetwork/topics/security/bulletinoct2015-2511968.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5144)
