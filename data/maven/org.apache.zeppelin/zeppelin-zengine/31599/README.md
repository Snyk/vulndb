## Overview
[`org.apache.zeppelin:zeppelin-zengine`](https://zeppelin.apache.org) is a web-based notebook that enables interactive data analytics. You can make beautiful data-driven, interactive and collaborative documents with SQL, Scala and more.

Affected versions of the package are vulnerable to Insecure Random Number Generation due to the cryptographically insecure `random().nextInt` function which can produce predictable values and should not be used in security-sensitive context.

## Remediation
Upgrade `zeppelin-zengine` to version 0.8.0 (Not yet published) or higher.

## References
- [Apache jira Issue](https://issues.apache.org/jira/browse/ZEPPELIN-2970)
- [Github PR](https://github.com/apache/zeppelin/pull/2606)
- [Github Commit](https://github.com/apache/zeppelin/commit/e998f5e067daf71a0bbadcabc012d8e644c2b3e1)
