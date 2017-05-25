## Overview
[`ch.qos.logback:logback-classic`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22logback-classic%22)
Affected versions of this package are vulnerable Arbitrary Code Execution. A configuration can be turned on to allow remote logging through interfaces that accept untrusted serialized data. Authenticated attackers on the adjacent network can exploit this vulnerability to run arbitrary code through the deserialization of custom gadget chains.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5929)
- [Logback Security Advisory](https://logback.qos.ch/news.html)
