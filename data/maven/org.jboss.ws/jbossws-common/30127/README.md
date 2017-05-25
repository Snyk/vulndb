## Overview
[`org.jboss.ws:jbossws-common`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jbossws-common%22)
wsf/common/DOMUtils.java in JBossWS Native in Red Hat JBoss Enterprise Application Platform 4.2.0.CP09, 4.3, and 5.1.1; JBoss Enterprise Portal Platform 4.3.CP06 and 5.1.1; JBoss Enterprise SOA Platform 4.2.CP05, 4.3.CP05, and 5.1.0; JBoss Communications Platform 1.2.11 and 5.1.1; JBoss Enterprise BRMS Platform 5.1.0; and JBoss Enterprise Web Platform 5.1.1 does not properly handle recursion during entity expansion, which allows remote attackers to cause a denial of service (memory and CPU consumption) via a crafted request containing an XML document with a DOCTYPE declaration and a large number of nested entity references, a similar issue to CVE-2003-1564.

## References
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-1483)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=692584)
