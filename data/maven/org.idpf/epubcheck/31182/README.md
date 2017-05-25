## Overview
[`org.idpf:epubcheck`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22epubcheck%22)
Affected versions of the package are vulnerable to XML External Entity (XXE) Injection due to not properly restricting external entities when parsing XML in EPUB files during validation. An attacker can exploit this issye with a specially crafted EPUB file and read arbitrary files, or have the victim execute arbitrary requests on his behalf.

## References
- [Vulnerability Notes Database](https://www.kb.cert.org/vuls/id/779243)
