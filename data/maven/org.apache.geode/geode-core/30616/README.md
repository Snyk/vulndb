## Overview
Affected versions of [`org.apache.geode:geode-core`](https://geode.apache.org) are vulnerable to Authentication Bypass due to insufficient privilege restriction.  A malicious user can write a function to change the `securityManager`, giving them access to the system.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/GEODE-2146)
