## Overview
[`ognl:ognl`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22ognl%22)
Apache Struts 2.0.0 through 2.3.24.1 does not properly cache method references when used with OGNL before 3.0.12, which allows remote attackers to cause a denial of service (block access to a web site) via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3093)
- [Github Commit](https://github.com/jkuhnert/ognl/commit/ae43073fbf38db8371ff4f8bf2a966ee3b5f7e92)
