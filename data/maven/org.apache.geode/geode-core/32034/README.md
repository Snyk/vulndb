## Overview
[`org.apache.geode:geode-core`](https://geode.apache.org) is a data management platform that provides real-time, consistent access to data-intensive applications throughout widely distributed cloud architectures.

When an Apache Geode cluster before v1.3.0 is operating in secure mode, a user with read access to specific regions within a Geode cluster may execute OQL queries containing a region name as a bind parameter that allow read access to objects within unauthorized regions.

A malicious user with read access to specific regions within a Geode cluster may execute OQL queries containing a region name as a bind parameter that allow read access to objects within unauthorized regions.

## References
- [Apache Mailing List](https://lists.apache.org/thread.html/e580d22195b6b61ff9cf866ac6dd6fe16e790ff0e14a3b1a22cd20b1@%3Cuser.geode.apache.org%3E)
- [Jira Issue](https://issues.apache.org/jira/browse/GEODE-3248)
- [Apache Geode Release Notes](https://cwiki.apache.org/confluence/display/GEODE/Release+Notes#ReleaseNotes-SecurityVulnerabilities)
- [GitHub PR](https://github.com/apache/geode/pull/837)
- [GitHub Commit](https://github.com/apache/geode/commit/02b9646618e074f80b3d5fed0e5b512a34b5897a)
