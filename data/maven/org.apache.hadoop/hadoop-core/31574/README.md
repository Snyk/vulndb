## Overview
[`org.apache.hadoop:hadoop-core`](https://hadoop.apache.org) is a framework that allows for the distributed processing of large data sets across clusters of computers using simple programming models.

Affected versions of the package are vulnerable to Cryptographic Weakness due to an insufficient secret key length.
Apache Hadoop before 0.23.4, 1.x before 1.0.4, and 2.x before 2.0.2 generate token passwords using a 20-bit secret when Kerberos security features are enabled, which makes it easier for context-dependent attackers to crack secret keys via a brute-force attack.

## Remediation
Upgrade `org.apache.hadoop:hadoop-main` to version 2.0.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2012-4449)
- [Github Commit](https://github.com/apache/hadoop/commit/d6b7f10438677507fbe1adadec28d219889eab5b)
- [Cloudera Security Bulletin](https://www.cloudera.com/documentation/other/security-bulletins/topics/csb_topic_1.html#topic_1_0)
