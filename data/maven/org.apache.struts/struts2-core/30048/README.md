## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
Apache Struts 2 before 2.3.14.3 allows remote attackers to execute arbitrary OGNL code via a request with a crafted value that contains both "${}" and "%{}" sequences, which causes the OGNL code to be evaluated twice.

## References

- [Vulnerability Summary](http://struts.apache.org/docs/s2-015.html)
