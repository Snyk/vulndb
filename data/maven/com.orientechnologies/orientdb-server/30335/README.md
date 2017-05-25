## Overview
[`com.orientechnologies:orientdb-server`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22orientdb-server%22)
server/network/protocol/http/OHttpSessionManager.java in the Studio component in OrientDB Server Community Edition before 2.0.15 and 2.1.x before 2.1.1 improperly relies on the java.util.Random class for generation of random Session ID values, which makes it easier for remote attackers to predict a value by determining the internal state of the PRNG in this class.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2913)
- [Github Commit](https://github.com/orientechnologies/orientdb/commit/668ece96be210e742a4e2820a3085b215cf55104)
