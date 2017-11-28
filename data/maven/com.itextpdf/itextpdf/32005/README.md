## Overview
[`com.itextpdf:itextpdf`](http://itextpdf.com) is a software developer toolkit that allows users to integrate PDF functionalities within their applications, processes or products.

Affected versions of this package are vulnerable to XML External Entity (XXE) Injection attacks.
The XML parsers in iText before 5.5.12 and 7.x before 7.0.3 do not disable external entities, which might allow remote attackers to conduct XML external entity (XXE) attacks via a crafted PDF.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9096)
- [Securityfocus](http://www.securityfocus.com/archive/1/archive/1/541483/100/0/threaded)
- [Github Commit](https://github.com/itext/itextpdf/commit/ad38371c396ac5ffbfb28056809e8ffaa5a18ccd)
