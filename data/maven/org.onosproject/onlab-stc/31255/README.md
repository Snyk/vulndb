## Overview
[`org.onosproject:onlab-stc`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22onlab-stc%22)
Affected versions of the package are vulnerable to Denial Of Service (DoS).
The SslHandler in Netty before 3.9.2 allows remote attackers to cause a denial of service (infinite loop and CPU consumption) via a crafted SSLv2Hello message.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3488)
