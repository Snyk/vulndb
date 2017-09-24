## Overview
[`org.apache.ranger:ranger`](http://ranger.apache.org) is a framework to enable, monitor and manage comprehensive data security across the Hadoop platform.

Apache Ranger before 0.6.is vulnerable to a Stored Cross-Site Scripting (XSS) attack when entering custom policy conditions. Admin users can store some arbitrary javascript code to be executed when normal users login and access policies.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `org.apache.ranger:ranger` to version 0.6.3 or higher.

## References
- [Github PR](https://nvd.nist.gov/vuln/detail/CVE-2016-8751)
- [Github Issue](http://seclists.org/oss-sec/2017/q1/273)
- [Github Commit](https://cwiki.apache.org/confluence/display/RANGER/Vulnerabilities+found+in+Ranger)
