## Overview
[`com.opensymphony:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22) is an command-pattern framework that is used to power WebWork as well as other applications. XWork provides an Inversion of Control container, a powerful expression language, data type conversion, validation, and pluggable configuration.

OGNL provides, among other features, extensive expression evaluation capabilities. The vulnerability allows a malicious user to bypass all the protections (regex pattern, deny method invocation) built into the ParametersInterceptor, thus being able to inject a malicious expression in any exposed string variable for further evaluation.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-3923)
- [Marian Ventuneac Blog](http://blog.o0o.nu/2012/01/cve-2011-3923-yet-another-struts2.html)
- [Apache Security Bulletin](https://struts.apache.org/docs/s2-009.html)
- [GitHub Commit](https://github.com/apache/struts/commit/2c1eb6bb57f90db7287fc3ed0086793d0a43fe9e)
- [Confluence Page](https://cwiki.apache.org/confluence/display/WW/S2-009)
