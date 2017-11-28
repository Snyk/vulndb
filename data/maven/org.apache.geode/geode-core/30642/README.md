## Overview
Affected versions of [`org.apache.geode:geode-core`](https://geode.apache.org) are vulnerable to Information Exposure.
When a cluster is operating in secure mode, a user with read privileges for specific data regions can use the gfsh command line utility to execute queries. In Apache Geode before 1.2.1, the query results may contain data from another user's concurrently executing gfsh query, potentially revealing data that the user is not authorized to view.

## Remediation
Upgrade `org.apache.geode:geode-core` to version 1.2.1 or higher.

## References
- [Apache Security Advisory](http://mail-archives.apache.org/mod_mbox/geode-user/201709.mbox/%3CCAEwge-FqzrT+deCkNkM-EQZuKfg-XuqY4cGjFiqxoKBVduY1Zw@mail.gmail.com%3E)
- [GitHub Issue](https://issues.apache.org/jira/browse/GEODE-3217)
- [Apache Geode Release Notes](https://cwiki.apache.org/confluence/display/GEODE/Release+Notes)
