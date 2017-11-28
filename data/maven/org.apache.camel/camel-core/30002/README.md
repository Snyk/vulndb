## Overview
[`org.apache.camel:camel-core`](https://camel.apache.org/) is a versatile open-source integration framework based on known Enterprise Integration Patterns.

Apache Camel before 2.9.7, 2.10.0 before 2.10.7, 2.11.0 before 2.11.2, and 2.12.0 allows remote attackers to execute arbitrary simple language expressions by including "$simple{}" in a CamelFileName message header to a (1) FILE or (2) FTP producer.

## References
- [Apache Security Advisory](http://camel.apache.org/security-advisories.data/CVE-2013-4330.txt.asc)
- [Jira Issue #1](https://issues.apache.org/jira/browse/CAMEL-6734)
- [Jira Issue #2 ](https://issues.apache.org/jira/browse/CAMEL-6748)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4330)
