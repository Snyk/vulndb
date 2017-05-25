## Overview
[`com.jamonapi:jamon`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jamon%22)
Multiple cross-site scripting (XSS) vulnerabilities in JAMon (Java Application Monitor) 2.7 and earlier allow remote attackers to inject arbitrary web script or HTML via the (1) listenertype or (2) currentlistener parameter to mondetail.jsp or ArraySQL parameter to (3) mondetail.jsp, (4) jamonadmin.jsp, (5) sql.jsp, or (6) exceptions.jsp.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-6235)
- [GitHub Commit](https://github.com/stevensouza/jamonapi/commit/05e6be6849abade047056c25ece23d9553deb3f3)
- [OSS Security](http://seclists.org/fulldisclosure/2014/Jan/164)
