## Overview
[`org.apache.hadoop:hadoop-common`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

Affected versions of the package are vulnerable to Information Exposure.

If you use the CredentialProvider feature to encrypt passwords used in NodeManager configs, it may be possible for any Container launched by that NodeManager to gain access to the encryption password. The other passwords themselves are not directly exposed.

## Remediation 
Upgrade `org.apache.hadoop:hadoop-common` to versions 2.6.5, 2.7.3 or higher

## References
- [OSS Security](http://seclists.org/oss-sec/2017/q1/47)
