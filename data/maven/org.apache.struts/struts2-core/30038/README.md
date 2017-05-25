## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
ParametersInterceptor in OpenSymphony XWork 2.0.x before 2.0.6 and 2.1.x before 2.1.2, as used in Apache Struts and other products, does not properly restrict # (pound sign) references to context objects, which allows remote attackers to execute Object-Graph Navigation Language (OGNL) statements and modify server-side context objects, as demonstrated by use of a \u0023 representation for the # character.

## References

- [Vulnerability Summary](http://struts.apache.org/release/2.2.x/docs/s2-003.html)
- [Jira Issue #1](https://issues.apache.org/jira/browse/WW-2692)
- [Jira Issue #2](http://jira.opensymphony.com/browse/XW-641)
