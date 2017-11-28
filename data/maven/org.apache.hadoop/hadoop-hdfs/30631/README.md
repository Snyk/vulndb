## Overview
[`org.apache.hadoop:hadoop-hdfs`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

Affected versions of the package are vulnerable to Information Exposure via the short-circuit reads feature of HDFS. A local user on an HDFS DataNode may be able to craft a block token that grants unauthorized read access to random files by guessing certain fields in the token.

## References
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/12/16/6)
