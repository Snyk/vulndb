## Overview
[`org.apache.geode:geode-core`](https://geode.apache.org) is a data management platform that provides real-time, consistent access to data-intensive applications throughout widely distributed cloud architectures.

When an Apache Geode cluster before v1.3.0 is operating in secure mode, a user with read access to specific regions within a Geode cluster may execute OQL queries that allow read and write access to objects within unauthorized regions. In addition a user could invoke methods that allow remote code execution.

A malicious user with read access to specific regions within a Geode cluster may execute OQL queries that allow read and write access to objects within unauthorized regions. In addition a user could invoke methods that allow remote code execution.



## References
- [Apache Mailing List](https://lists.apache.org/thread.html/0fc5ea3c1ea06fe7058a0ab56d593914b05f728a6c93c5a6755956c7@%3Cuser.geode.apache.org%3E)
- [Jira Issue](https://issues.apache.org/jira/browse/GEODE-3247)
- [Apache Geode Release Notes](https://cwiki.apache.org/confluence/display/GEODE/Release+Notes#ReleaseNotes-SecurityVulnerabilities)
- [GitHub PR](https://github.com/apache/geode/pull/837)
