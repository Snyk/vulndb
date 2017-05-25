## Overview
[`org.apache.poi:poi`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22poi%22)
Affected versions of the package are vulnerable to Denial of Service (DoS). The calculation of `dataSize` in Ole10Native's initialization is faulty, causing the code to allocate a large buffer and resulting in Out-Of-Memory.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/TIKA-2115)
- [Github Commit](https://github.com/apache/poi/commit/7f9f8e9afa8160ef401ec8b3416d36428e928e2f)
