## Overview
[`org.apache.zookeeper:zookeeper`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22zookeeper%22)
Affected versions of this package are vulnerable to Denial of Service (DoS) attacks. Four letter zookeeper commands (such as `wchp`/`wchc` ) are not properly handed.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5637)
- [Jira Issue](https://issues.apache.org/jira/browse/ZOOKEEPER-2693)
