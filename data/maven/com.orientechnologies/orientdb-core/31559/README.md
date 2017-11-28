## Overview
[`com.orientechnologies:orientdb-core`](https://orientechnologies.com) is an Open Source Multi-Model NoSQL DBMS with the support of Native Graphs, Documents Full-Text, Reactivity, Geo-Spatial and Object Oriented concepts.

Affected versions of the package are vulnerable to Arbitrary Command Injection, as does not enforce privilege requirements during `where`, `fetchplan` or `order by` use, which allows remote attackers to execute arbitrary OS commands via a crafted request.

## Remediation
Upgrade `com.orientechnologies:orientdb-core` to version 2.2.23 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-11467)
- [Github ChangeLog](https://github.com/orientechnologies/orientdb/wiki/OrientDB-2.2-Release-Notes#security)
- [Github Commit](https://github.com/orientechnologies/orientdb/commit/200535c3183f7db88ee4526bf3316d6bdeddb68e)
