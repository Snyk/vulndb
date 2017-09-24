## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Information Exposure. The administrative interface did not check permissions for the history view, which allows remote authenticated administrators to obtain sensitive object history information.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-0305)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2013-0670.html)
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2013/feb/19/security/)
