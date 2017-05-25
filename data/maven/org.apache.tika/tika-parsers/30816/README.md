## Overview
[`org.apache.tika:tika-parsers`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22tika-parsers%22)
Affected versions of the package are vulnerable to XML External Entity (XXE) Injection. Apache Tika parses XML within numerous file formats.  In some instances[1], the initialization of the XML parser or the choice of handlers did not protect against XML External Entity (XXE) vulnerabilities.

[1] Spreadsheets in OOXML files and XMP in PDF and other file formats.

## References
- [OSS Security](http://seclists.org/oss-sec/2016/q2/413)
