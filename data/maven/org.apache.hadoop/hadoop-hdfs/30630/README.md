## Overview
[`org.apache.hadoop:hadoop-hdfs`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

DataNodes in Apache Hadoop 2.0.0 alpha does not check the BlockTokens of clients when Kerberos is enabled and the DataNode has checked out the same BlockPool twice from a NodeName, which might allow remote clients to read arbitrary blocks, write to blocks to which they only have read access, and have other unspecified impacts.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-3376)
