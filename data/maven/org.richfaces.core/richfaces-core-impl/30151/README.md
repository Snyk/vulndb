## Overview
[`org.richfaces.core:richfaces-core-impl`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22richfaces-core-impl%22)
The doFilter function in webapp/PushHandlerFilter.java in JBoss RichFaces 4.3.4, 4.3.5, and 5.x allows remote attackers to cause a denial of service (memory consumption and out-of-memory error) via a large number of malformed atmosphere push requests.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-0086)
- [JBoss Issue](https://issues.jboss.org/browse/RF-13250)
