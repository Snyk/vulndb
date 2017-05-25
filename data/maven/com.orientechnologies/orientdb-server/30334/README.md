## Overview
[`com.orientechnologies:orientdb-server`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22orientdb-server%22)
The JSONP endpoint in the Studio component in OrientDB Server Community Edition before 2.0.15 and 2.1.x before 2.1.1 does not properly restrict callback values, which allows remote attackers to conduct cross-site request forgery (CSRF) attacks, and obtain sensitive information, via a crafted HTTP request.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2912)
- [Github Issue](https://github.com/orientechnologies/orientdb/issues/4824)
- [Github Commit 2.1.x](https://github.com/orientechnologies/orientdb/commit/f11dbced94cb587f445cb99db08735c023921053)
- [Github Commit 2.0.x](https://github.com/orientechnologies/orientdb/commit/5dbd6035e4e59259f3e08ba8f1218785f36d1d2d)
