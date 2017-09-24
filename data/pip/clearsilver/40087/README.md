## Overview
[`clearsilver`](https://pypi.python.org/pypi/clearsilver) is a High performance HTML Template System
Format string vulnerability in the p_cgi_error function in python/neo_cgi.c in the Python CGI Kit (neo_cgi) module for Clearsilver 0.10.5 and earlier allows remote attackers to cause a denial of service (crash) and possibly execute arbitrary code via format string specifiers that are not properly handled when creating CGI error messages using the cgi_error API function.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4357)
- [Openwall](http://www.openwall.com/lists/oss-security/2011/11/27/1)
