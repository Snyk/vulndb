## Overview
[`org.jboss.naming:jnpserver`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jnpserver%22)
The (1) JNDI service, (2) HA-JNDI service, and (3) HAJNDIFactory invoker servlet in JBoss Enterprise Application Platform 4.3.0 CP10 and 5.1.2, Web Platform 5.1.2, SOA Platform 4.2.0.CP05 and 4.3.0.CP05, Portal Platform 4.3 CP07 and 5.2.x before 5.2.2, and BRMS Platform before 5.3.0 do not properly restrict write access, which allows remote attackers to add, delete, or modify items in a JNDI tree via unspecified vectors.

## References
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-4605)
