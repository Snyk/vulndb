## Overview
[`org.apache.struts.xwork:xwork-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22xwork-core%22)
Affected versions of the package are vulnerable to Parameter Alteration. ValueStack defines special top object which represents root of execution context. It can be used to manipulate Struts' internals or can be used to affect container's settings


## References
- [Apache Security Advisory](https://struts.apache.org/docs/s2-026.html)
