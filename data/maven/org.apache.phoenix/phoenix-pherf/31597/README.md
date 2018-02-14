## Overview
[`org.apache.phoenix:phoenix-pherf`](https://phoenix.apache.org) enables OLTP and operational analytics in Hadoop for low latency applications.

Affected versions of this package are vulnerable to XML External Entity (XXE) Injection.

## Remediation
Upgrade `org.apache.phoenix:phoenix-pherf` to version 4.12.0-HBase-1.3 or higher.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/PHOENIX-4188)
- [GitHub Commit](https://github.com/apache/phoenix/commit/4ee35057c6a63c347f959361338b517d4f5b38c4)
