## Overview
[`org.uberfire:uberfire-server`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22uberfire-server%22)
The UberFire Framework 0.3.x does not properly restrict paths, which allows remote attackers to (1) execute arbitrary code by uploading crafted content to FileUploadServlet or (2) read arbitrary files via vectors involving FileDownloadServlet.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-8114)