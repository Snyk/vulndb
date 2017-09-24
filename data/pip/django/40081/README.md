## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Denial of Service attacks. The `verify_exists` functionality in the `URLField` implementation relies on Python libraries that attempt access to an arbitrary URL with no timeout. This allows remote attackers to cause a high resource consumption with a URL that can cause a timeout (a TCP connection with no application data sent, or a large amount of application data).

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2011/sep/09/security-releases-issued/)
- [Django Vulnerability Update](https://www.djangoproject.com/weblog/2011/sep/10/127/)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4137)
- [Openwall](http://openwall.com/lists/oss-security/2011/09/11/1)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=737366)
