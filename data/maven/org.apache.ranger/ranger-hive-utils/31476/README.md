## Overview
[`org.apache.ranger:ranger-hive-utils`](https://ranger.apache.org) is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform.

Affected versions of the package are vulnerable to Access Restriction Bypass.
In environments that use external location for hive tables, Hive Authorizer in Apache Ranger before 0.7.1 should be checking RWX permission for create table.

## Remediation
Upgrade `org.apache.ranger:ranger-hive-utils` to version 0.7.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7677)
- [Ranger Release Notes](https://cwiki.apache.org/confluence/display/RANGER/Vulnerabilities+found+in+Ranger)
- [Openwall](http://www.openwall.com/lists/oss-security/2017/06/07/9)
