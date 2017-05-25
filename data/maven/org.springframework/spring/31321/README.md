## Overview
[`org.springframework:spring`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring%22)
Affected versions of this package are vulnerable to Arbitrary Code Execution via an HTTP request containing `class.classLoader.URLs[0]=jar:` followed by a URL of a crafted `.jar` file.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-1622)
- [OSS Security](http://seclists.org/fulldisclosure/2010/Jun/456)
