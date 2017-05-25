## Overview
[`com.opensymphony:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)  is an command-pattern framework that is used to power WebWork as well as other applications. XWork provides an Inversion of Control container, a powerful expression language, data type conversion, validation, and pluggable configuration.

The OGNL extensive expression evaluation capability in XWork in Struts 2.0.0 through 2.1.8.1, as used in Atlassian Fisheye, Crucible, and possibly other products, uses a permissive whitelist, which allows remote attackers to modify server-side context objects and bypass the "#" protection mechanism in ParameterInterceptors via the (1) #context, (2) #\_memberAccess, (3) #root, (4) #this, (5) #\_typeResolver, (6) #\_classResolver, (7) #\_traceEvaluations, (8) #\_lastEvaluation, (9) #\_keepLastEvaluation, and possibly other OGNL context variables, a different vulnerability than CVE-2008-6504.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-1870)
- [Meder Kydyraliev Blog](http://blog.o0o.nu/2010/07/cve-2010-1870-struts2xwork-remote.html)
- [ExploitDB](https://www.exploit-db.com/exploits/14360/)
- [Apache Security Bulletin](http://struts.apache.org/docs/s2-005.html)
- [Github Commit](https://github.com/apache/struts/commit/0c367776762b25c567b415ac4c2b0e48042cf34f)
