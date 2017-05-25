## Overview
[`org.apache.portals.jetspeed-2:j2-admin`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22j2-admin%22)
Directory traversal vulnerability in the Import/Export function in the Portal Site Manager in Apache Jetspeed before 2.3.1 allows remote authenticated administrators to write to arbitrary files, and consequently execute arbitrary code, via a .. (dot dot) in a ZIP archive entry, as demonstrated by "../../webapps/x.jsp."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-0709)