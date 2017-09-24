## Overview
[`org.apache.ranger:ranger`](http://ranger.apache.org) is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform.

Apache Ranger before 0.6.3 policy engine incorrectly matches paths in certain conditions when policy does not contain wildcards and has recursion flag set to true.

## Remediation
Upgrade `org.apache.ranger:ranger` to version 0.6.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-8751)
- [Seclists](http://seclists.org/oss-sec/2017/q1/273)
- [Ranger Release Notes](https://cwiki.apache.org/confluence/display/RANGER/Vulnerabilities+found+in+Ranger)
