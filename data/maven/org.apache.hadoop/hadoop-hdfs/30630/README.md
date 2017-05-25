## Overview
[`org.apache.hadoop:hadoop-hdfs`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hadoop-hdfs%22)
DataNodes in Apache Hadoop 2.0.0 alpha does not check the BlockTokens of clients when Kerberos is enabled and the DataNode has checked out the same BlockPool twice from a NodeName, which might allow remote clients to read arbitrary blocks, write to blocks to which they only have read access, and have other unspecified impacts.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-3376)