## Overview
[`org.apache.geode:geode-core`](https://geode.apache.org) is a data management platform that provides real-time, consistent access to data-intensive applications throughout widely distributed cloud architectures. 

When an Apache Geode cluster before v1.3.0 is operating in secure mode and an authenticated user connects to a Geode cluster using the gfsh tool with HTTP, the user is able to obtain status information and control cluster members even without CLUSTER:MANAGE privileges.
## References
- [Apache Mailing List](https://lists.apache.org/thread.html/560578479dabbdc93d0ee8746b7c857549202ef82f43aa22496aa589@%3Cuser.geode.apache.org%3E)
- [Jira Issue](https://issues.apache.org/jira/browse/GEODE-3685)
- [Apache Geode Release Notes](https://cwiki.apache.org/confluence/display/GEODE/Release+Notes#ReleaseNotes-SecurityVulnerabilities)
- [GitHub PR](https://github.com/apache/geode/pull/838)
- [GitHub Commit](https://github.com/apache/geode/commit/db4a493efc09600bf0a9778d5274c09b23b16644)
