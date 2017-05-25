## Overview
[`org.apache.pdfbox:pdfbox `](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22pdfbox %22)
Apache PDFBox XML External Entity (XXE) attack
Apache PDFBox before 1.8.12 and 2.x before 2.0.1 does not properly initialize the XML parsers, which allows context-dependent attackers to conduct XML External Entity (XXE) attacks via a crafted PDF.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2016-2175)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-2175)
- [Jira Issue](https://issues.apache.org/jira/browse/PDFBOX-2852)
