## Overview
[`requests`](https://pypi.python.org/pypi/requests) is a Python HTTP for Humans.

The `resolve_redirects` function in sessions.py in requests 2.1.0 through 2.5.3 allows remote attackers to conduct session fixation attacks via a cookie without a host value in a redirect.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2296)
- [Openwall](http://www.openwall.com/lists/oss-security/2015/03/14/4)
- [GitHub Commit](https://github.com/kennethreitz/requests/commit/3bd8afbff29e50b38f889b2f688785a669b9aafc)
- [Resuests Release Notes](https://warehouse.python.org/project/requests/2.6.0/)
