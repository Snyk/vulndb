## Overview
[`org.apache.qpid:qpid-common`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22qpid-common%22)
The serializing/deserializing functions in the qpid::framing::Buffer class in Apache Qpid 0.20 and earlier allow remote attackers to cause a denial of service (assertion failure and daemon exit) via unspecified vectors.  NOTE: this issue could also trigger an out-of-bounds read, but it might not trigger a crash.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-4460)