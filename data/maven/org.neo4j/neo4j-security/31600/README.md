## Overview
[`org.neo4j:neo4j-security`](https://neo4j.org) is the world’s leading Graph Database. It is a high performance graph store with all the features expected of a mature and robust database, like a friendly query language and ACID transactions.

Affected versions of the package are vulnerable to Timing Attack due to using the `Arrays.equals` to validate the password, which is vulnerable to a brute force attacks by malicious users.

## Remediation
Upgrade `neo4j-security` to version 3.0.12 or higher.

## References
- [Github PR](https://github.com/neo4j/neo4j/pull/10158)
- [Github Commit](https://github.com/neo4j/neo4j/commit/cad758138c1ab49303230312034564abe0fe57fa)
