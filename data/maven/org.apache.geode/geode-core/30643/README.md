## Overview
Affected versions of [`org.apache.geode:geode-core`](https://geode.apache.org) are vulnerable to Information Exposure.
When an Apache Geode cluster before v1.2.1 is operating in secure mode, an unauthenticated client can enter multi-user authentication mode and send metadata messages. These metadata operations could leak information about application data types. In addition, an attacker could perform a denial of service attack on the cluster.

## Remediation
Upgrade `org.apache.geode:geode-core` to version 1.2.1 or higher.

## References
- [Apache Security Advisory](http://mail-archives.apache.org/mod_mbox/geode-user/201709.mbox/%3CCAEwge-Hrbb7JS8Nygrh7geyFvW4bMZ3AdCmPOzMfvbniipz0bA@mail.gmail.com%3E)
- [GitHub Issue](https://issues.apache.org/jira/browse/GEODE-3249)
- [Apache Geode Release Notes](https://cwiki.apache.org/confluence/display/GEODE/Release+Notes)
