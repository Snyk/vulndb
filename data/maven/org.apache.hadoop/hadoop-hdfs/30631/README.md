## Overview
[`org.apache.hadoop:hadoop-hdfs`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hadoop-hdfs%22)
Affected versions of the package are vulnerable to Information Exposure via the short-circuit reads feature of HDFS. A local user on an HDFS DataNode may be able to craft a block token that grants unauthorized read access to random files by guessing certain fields in the token.

## References
- [OSS Security](http://www.openwall.com/lists/oss-security/2016/12/16/6)
