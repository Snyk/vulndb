## Overview
[`org.apache.karaf:org.apache.karaf.main`](https://karaf.apache.org/) is a modern and polymorphic container.

Affected versions of the package are vulnerable to Authentication Bypass via the `getByName()` method. An attacker may spoof DNS entries by using this method.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/KARAF-4201)
