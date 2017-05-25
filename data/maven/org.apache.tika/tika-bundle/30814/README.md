## Overview
[`org.apache.tika:tika-bundle`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tika-bundle%22)
It was found that the parsing of OOXML, XMP in PDF, and some other file formats by Apache Tika would expand entity references. A remote, unauthenticated attacker could use this flaw to read files accessible to the user running the application server, and potentially perform other more advanced XXE attacks.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2016-4434)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4434)
