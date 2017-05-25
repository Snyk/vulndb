## Overview
[`org.jboss.cache:jbosscache-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jbosscache-core%22)
The NonManagedConnectionFactory in JBoss Enterprise Application Platform (EAP) 5.1.2 and 5.2.0, Web Platform (EWP) 5.1.2 and 5.2.0, and BRMS Platform before 5.3.1 logs the username and password in cleartext when an exception is thrown, which allows local users to obtain sensitive information by reading the log file.

## References
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2012-0034)
