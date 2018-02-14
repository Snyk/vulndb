## Overview
[`org.apache.drill.exec:drill-java-exec`](https://exec.drill.apache.org) is a distributed MPP query layer that supports SQL and alternative query languages against NoSQL and Hadoop data storage systems.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS).

In Apache Drill 1.11.0 and earlier when submitting form from Query page users are able to pass arbitrary script or HTML which will take effect on Profile page afterwards. Example: after submitting special script that returns cookie information from Query page, malicious user may obtain this information from Profile page afterwards.

## Remediation
Upgrade `org.apache.drill.exec:drill-java-exec` to version 0.12.0 or higher

## References
- [Apache Mailing List](https://lists.apache.org/thread.html/608658a55d09e16542db41121a0a972c97448214cdc04071fd4db923@%3Cdev.drill.apache.org%3E)
- [Apace Jira Issue](https://issues.apache.org/jira/browse/DRILL-5766)
- [GitHub PR](https://github.com/apache/drill/pull/955)
