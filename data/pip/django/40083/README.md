## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cache Poisoning. It used a request's HTTP Host header to construct a full URL. An attacker can submit a request with a Host header of his or her choice, receive a response which constructs URLs using that Host header, and If that response is cached, further requests will be served out of cache using URLs containing the attacker's host of choice.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2011/sep/09/security-releases-issued/)
- [Django Vulnerability Update](https://www.djangoproject.com/weblog/2011/sep/10/127/)
- [Openwall](http://openwall.com/lists/oss-security/2011/09/11/1)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=737366)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4139)
