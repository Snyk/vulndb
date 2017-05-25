## Overview
[`org.springframework:spring-oxm`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-oxm%22)
When processing user provided XML documents, the Spring Framework did not disable by default the resolution of URI references in a DTD declaration. By observing differences in response times, an attacker could then identify valid IP addresses on the internal network with functioning web servers.

## References

- [Pivotal Security](http://www.gopivotal.com/security/cve-2014-0225)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0225)
