## Overview
[`com.opensymphony:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22) is an command-pattern framework that is used to power WebWork as well as other applications. XWork provides an Inversion of Control container, a powerful expression language, data type conversion, validation, and pluggable configuration.

Apache Struts 2 before 2.3.14.3 allows remote attackers to execute arbitrary OGNL code via a request with a crafted value that contains both "${}" and "%{}" sequences, which causes the OGNL code to be evaluated twice.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2135)
- [Apache Security Bulletin](http://struts.apache.org/docs/s2-015.html)
- [GitHub Commit](https://github.com/apache/struts/commit/54e5c912ebd9a1599bfcf7a719da17c28127bbe3)
- [Jira Issue](https://issues.apache.org/jira/browse/WW-4090)
