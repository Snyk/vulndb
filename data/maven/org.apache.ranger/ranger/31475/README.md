## Overview
[`org.apache.ranger:ranger`](https://ranger.apache.org) is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform.

Affected versions of the package are vulnerable to Access Restriction Bypass.
Policy resource matcher in Apache Ranger before 0.7.1 ignores characters after '\*' wildcard character - like my*test, test*.txt. This can result in unintended behavior.

## Remediation
Upgrade `org.apache.ranger:ranger` to version 0.7.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7677)
- [Ranger Release Notes](https://cwiki.apache.org/confluence/display/RANGER/Vulnerabilities+found+in+Ranger)
- [Openwall](http://www.openwall.com/lists/oss-security/2017/06/07/9)
