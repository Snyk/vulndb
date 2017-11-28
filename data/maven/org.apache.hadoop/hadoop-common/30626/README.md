## Overview
[`org.apache.hadoop:hadoop-common`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

The RPC protocol implementation in Apache Hadoop 2.x before 2.0.6-alpha, 0.23.x before 0.23.9, and 1.x before 1.2.1, when the Kerberos security features are enabled, allows man-in-the-middle attackers to disable bidirectional authentication and obtain sensitive information by forcing a downgrade to simple authentication.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2192)
