## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. The form library allows remote attackers to bypass intended resource limits for formsets by modifying the `max_num` parameter and cause high memory consumption, or trigger server errors.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-0306)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2013-0670.html)
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2013/feb/19/security/)
