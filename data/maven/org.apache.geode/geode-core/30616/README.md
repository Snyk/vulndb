## Overview
[`org.apache.geode:geode-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22geode-core%22)
Affected versions of the package are vulnerable to Authentication Bypass due to insufficient privilege restriction.  A malicious user can write a function to change the `securityManager`, giving them access to the system.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/GEODE-2146)
