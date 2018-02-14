## Overview
[`org.apache.zeppelin:zeppelin-zengine`](https://zeppelin.apache.org) is a web-based notebook that enables interactive data analytics. You can make beautiful data-driven, interactive and collaborative documents with SQL, Scala and more.

Affected versions of the package are vulnerable to information disclosure when system data or debugging information leaves the program through an output stream or logging function.

```
Line 137: LOG.debug("Encrypted user key is {}", userKey);
Line 148: LOG.debug("IV is {}, IV length is {}", initVector, initVector.length());
```

These lines may print information which can reveal some important data to user making it vulnerable to attacks, we should not log this sensitive information.

## Remediation
Upgrade `zeppelin-zengine` to version 0.7.3 or higher.

## References
- [Apache jira Issue](https://issues.apache.org/jira/browse/ZEPPELIN-2733)
- [Github PR](https://github.com/apache/zeppelin/pull/2468)
- [Github Commit](https://github.com/apache/zeppelin/commit/ad3138385350e62e7a612f2237519441e1adbf84)
