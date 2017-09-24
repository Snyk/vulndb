## Overview
[`soappy`](https://pypi.python.org/pypi/soappy) is a SOAP Services for Python
SOAPpy 0.12.5 does not properly detect recursion during entity expansion, which allows remote attackers to cause a denial of service (memory and CPU consumption) via a crafted SOAP request containing a large number of nested entity references.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3243)
- [Seclists](http://seclists.org/fulldisclosure/2014/May/20)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/05/06/9)
