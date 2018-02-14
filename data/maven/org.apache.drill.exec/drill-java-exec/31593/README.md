## Overview
[`org.apache.drill.exec:drill-java-exec`](https://exec.drill.apache.org) is a distributed MPP query layer that supports SQL and alternative query languages against NoSQL and Hadoop data storage systems.

Affected versions of the package are vulnerable to drillbit Client Spoofing. An attacker can spoof a drillbit client, which can lead to sensitive data being written to the attacker's target.

## Remediation
Upgrade `org.apache.drill.exec:drill-java-exec` to version 0.12.0 or higher

## References
- [Github PR](https://github.com/apache/drill/pull/999)
- [Github Commit](https://github.com/apache/drill/commit/40d0991998a4174cf5d4b12f695380e97aba4fd3)
- [Apache Jira](https://issues.apache.org/jira/browse/DRILL-5881)
