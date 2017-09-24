## Overview
[`org.apache.ranger:ranger`](http://ranger.apache.org) is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform.

SQL injection vulnerability in the policy admin tool in Apache Ranger before 0.5.3 allows remote authenticated administrators to execute arbitrary SQL commands via the eventTime parameter to service/plugins/policies/eventTime.

## Remediation
Upgrade `org.apache.ranger:ranger` to version 0.5.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-2174)
- [Seclists](http://seclists.org/oss-sec/2016/q2/446)
- [Ranger Release Notes](https://cwiki.apache.org/confluence/display/RANGER/Vulnerabilities+found+in+Ranger)
- [Jira Issue](https://issues.apache.org/jira/browse/RANGER-921)
