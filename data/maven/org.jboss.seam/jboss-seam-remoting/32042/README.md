## Overview
[`org.jboss.seam:jboss-seam-remoting`](http://seamframework.org/) was a web application framework developed by JBoss, a division of Red Hat

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. 

JBoss Seam response envelopes include unsanitized parameter and id names provided in the request. This allows a request to inject arbitrary XML into the response.  A remote attacker could use this flaw to perform reflected cross-site scripting attacks, provided the JBoss Seam remoting application does not apply any cross-site request forgery (CSRF) protection.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1078646)
