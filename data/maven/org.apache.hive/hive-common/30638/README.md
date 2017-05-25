## Overview
[`org.apache.hive:hive-common`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22hive-common%22)
Affected versions of the package are vulnerable to Information Exposure, also known as the replay attack. The is due to authenticating twice within a short period of time, when the context root is requested.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/HIVE-14984)
