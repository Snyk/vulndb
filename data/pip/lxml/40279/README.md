## Overview
[`lxml`](https://pypi.python.org/pypi/lxml) is a Powerful and Pythonic XML processing library combining libxml2/libxslt with the ElementTree API.
Incomplete blacklist vulnerability in the lxml.html.clean module in lxml before 3.3.5 allows remote attackers to conduct cross-site scripting (XSS) attacks via control characters in the link scheme to the clean_html function.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3146)
- [Seclist](http://seclists.org/fulldisclosure/2014/Apr/210)
