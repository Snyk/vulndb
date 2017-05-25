## Overview
[`org.apache.shiro:shiro-web`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22shiro-web%22)
Apache Shiro before 1.1.0, and JSecurity 0.9.x, does not canonicalize URI paths before comparing them to entries in the shiro.ini file, which allows remote attackers to bypass intended access restrictions via a crafted request, as demonstrated by the /./account/index.jsp URI.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-3863)