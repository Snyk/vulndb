## Overview
[`com.typesafe.play:play_2.10`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22play_2.10%22)
Affected versions of this package are vulnerable to XML External Entity (XXE) Injection. An attacker may use this in order to read files from the system, and possibly cause a denial of service.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3630)
- [GitHub PR](https://github.com/playframework/playframework/pull/3480)
- [GitHub Commit](https://github.com/playframework/playframework/commit/97f9ddbb13d8f373e8088f4bb41cb2ccd6df9de7)
- [Playframework Security Disclosure](https://www.playframework.com/security/vulnerability/CVE-2014-3630-XmlExternalEntity)
