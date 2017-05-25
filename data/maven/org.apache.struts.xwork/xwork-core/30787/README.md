## Overview
[`org.apache.struts.xwork:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)
Affected versions of the package are vulnerable to Arbitrary Command Execution. A malicious user may bypass all the protections (regex pattern, deny method invocation) built into the ParametersInterceptor, thus being able to inject a malicious expression in any exposed string variable for further evaluation.

## References
- [Apache Security Advisory](https://struts.apache.org/docs/s2-009.html)
