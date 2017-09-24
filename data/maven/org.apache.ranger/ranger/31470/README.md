## Overview
[`org.apache.ranger:ranger`](http://ranger.apache.org) is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform.

The Admin UI in Apache Ranger before 0.5.1 does not properly handle authentication requests that lack a password, which allows remote attackers to bypass authentication by leveraging knowledge of a valid username.

## Remediation
Upgrade `org.apache.ranger:ranger` to version 0.5.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-0733)
- [Seclists](http://seclists.org/oss-sec/2016/q1/284)
- [Ranger Release Notes](https://cwiki.apache.org/confluence/display/RANGER/Vulnerabilities+found+in+Ranger)
- [Jira Issue](https://issues.apache.org/jira/browse/RANGER-835)
