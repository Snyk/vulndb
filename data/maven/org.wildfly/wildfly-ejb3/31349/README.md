## Overview
[`org.wildfly:wildfly-ejb3`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22wildfly-ejb3%22)
The EJB invocation handler implementation in Red Hat JBossWS, as used in JBoss Enterprise Application Platform (EAP) 6.2.0 and 6.3.0, does not properly enforce the method level restrictions for outbound messages, which allows remote authenticated users to access otherwise restricted JAX-WS handlers by leveraging permissions to the EJB class. NOTE: this vulnerability exists because of an incomplete fix for CVE-2013-2133.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3464)