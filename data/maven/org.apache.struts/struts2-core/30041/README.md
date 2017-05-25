## Overview
[`org.apache.struts:struts2-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22struts2-core%22)
OGNL provides, among other features, extensive expression evaluation capabilities. The vulnerability allows a malicious user to bypass all the protections (regex pattern, deny method invocation) built into the ParametersInterceptor, thus being able to inject a malicious expression in any exposed string variable for further evaluation.

A similar behavior was already addressed in S2-003 and S2-005, but it turned out that the resulting fix based on whitelisting acceptable parameter names closed the vulnerability only partially.
Regular expression in ParametersInterceptor matches top['foo'](0) as a valid expression, which OGNL treats as (top['foo'])(0) and evaluates the value of 'foo' action parameter as an OGNL expression. This lets malicious users put arbitrary OGNL statements into any String variable exposed by an action and have it evaluated as an OGNL expression and since OGNL statement is in HTTP parameter value attacker can use blacklisted characters (e.g. #) to disable method execution and execute arbitrary methods, bypassing the ParametersInterceptor and OGNL library protections.

## References

- [Vulnerability Summary](http://struts.apache.org/docs/s2-009.html)
