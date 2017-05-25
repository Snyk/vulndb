## Overview
[`com.orientechnologies:orientdb-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22orientdb-core%22)
The `OServer.java` file is responsible for auto-generating passwords by using the variable `new Random()`. This is Java's default random-number generator initialized with the current system time as a seed, which is not secure because it is easily predictable. The `SecureRandom` random-number generator was used as a fix.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-2912)
- [GitHub Issue](https://github.com/orientechnologies/orientdb/issues/5597)
- [GitHub Comment](https://github.com/orientechnologies/orientdb/issues/5597#issuecomment-173289596)
- [GitHub PR #1](https://github.com/orientechnologies/orientdb/pull/5611)
- [GitHub PR #2](https://github.com/orientechnologies/orientdb/pull/5705)
- [GitHub Commit #1](https://github.com/orientechnologies/orientdb/pull/5611/commits/5fcbaf6038f05753c51dbcfc6c1861ae51c9a014)
- [GitHub Commit #2](https://github.com/orientechnologies/orientdb/pull/5705/commits/2a54eda006c1f7cb67a9207862f0b2dc7bd99066)
- [GitHub Commit #3](https://github.com/orientechnologies/orientdb/commit/195d5c767d76bdd67b889b81e3fc090b4568832a)
