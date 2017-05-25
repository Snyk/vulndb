## Overview
[`org.apache.pdfbox:jempbox`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jempbox%22)
Apache PDFBox before 1.8.12 and 2.x before 2.0.1 does not properly initialize the XML parsers, which allows context-dependent attackers to conduct XML External Entity (XXE) attacks via a crafted PDF.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2175)