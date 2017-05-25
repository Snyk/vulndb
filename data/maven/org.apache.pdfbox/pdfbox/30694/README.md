## Overview
[`org.apache.pdfbox:pdfbox`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22pdfbox%22)
Affected versions of the package are vulnerable to Authentication Bypass. The `ReadOnly` permissions are not called in the `StandardSecurityHandler`, allowing all users to edit the PDF file although the are not the owners.

## References
- [Apache Security Advisory](https://issues.apache.org/jira/browse/PDFBOX-3341)
- [GitHub Commit](https://github.com/apache/pdfbox/commit/f0c0fb1af3c0419bdea2fe3d0ab1fe36a6d9dc2c)
