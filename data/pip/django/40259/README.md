## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.The default configuration for the file upload handling uses a sequential file name generation process when a file with a conflicting name is uploaded. An attackers can cause high CPU consumption by uploading multiple files with the same name.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2014/aug/20/security/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0481)
