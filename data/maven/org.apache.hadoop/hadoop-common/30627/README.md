## Overview
[`org.apache.hadoop:hadoop-common`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hadoop-common%22)
Affected versions of the package are vulnerable to Information Exposure.
The YARN NodeManager in Apache Hadoop 2.6.x before 2.6.5 and 2.7.x before 2.7.3 can leak the password for credential store provider used by the NodeManager to YARN Applications.
If you use the CredentialProvider feature to encrypt passwords used in NodeManager configs, it may be possible for any Container launched by that NodeManager to gain access to the encryption password. The other passwords themselves are not directly exposed.

## References
- [OSS Security](http://seclists.org/oss-sec/2017/q1/47)
