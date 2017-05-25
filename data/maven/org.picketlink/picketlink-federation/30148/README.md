## Overview
[`org.picketlink:picketlink-federation`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22picketlink-federation%22)
The org.jboss.security.plugins.mapping.JBossMappingManager implementation in JBoss Security in Red Hat JBoss Enterprise Application Platform (EAP) before 6.3.3 uses the default security domain when a security domain is undefined, which allows remote authenticated users to bypass intended access restrictions by leveraging credentials on the default domain for a role that is also on the application domain.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-7827)
