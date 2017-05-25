## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
The OGNL extensive expression evaluation capability in XWork in Struts 2.0.0 through 2.1.8.1, as used in Atlassian Fisheye, Crucible, and possibly other products, uses a permissive whitelist, which allows remote attackers to modify server-side context objects and bypass the "#" protection mechanism in ParameterInterceptors via the (1) #context, (2) #\_memberAccess, (3) #root, (4) #this, (5) #\_typeResolver, (6) #\_classResolver, (7) #\_traceEvaluations, (8) #\_lastEvaluation, (9) #\_keepLastEvaluation, and possibly other OGNL context variables, a different vulnerability than CVE-2008-6504.

## References

- [Vulnerability Summary](http://struts.apache.org/docs/s2-005.html)
