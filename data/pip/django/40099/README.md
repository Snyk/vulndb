## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. The `ImageField` class in the form system completely decompresses image data during image validation, which allows remote attackers to cause a denial of service (memory consumption) by uploading a malicious image file.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2012/jul/30/security-releases-issued/)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/07/31/2),
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-3443)
