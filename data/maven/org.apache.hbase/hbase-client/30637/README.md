## Overview
[`org.apache.hbase:hbase-client`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hbase-client%22)
Apache HBase 0.98 before 0.98.12.1, 1.0 before 1.0.1.1, and 1.1 before 1.1.0.1, as used in IBM InfoSphere BigInsights 3.0, 3.0.0.1, and 3.0.0.2 and other products, uses incorrect ACLs for ZooKeeper coordination state, which allows remote attackers to cause a denial of service (daemon outage), obtain sensitive information, or modify data via unspecified client traffic.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-1836)