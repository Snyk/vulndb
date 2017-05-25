## Overview
[`org.jboss.resteasy:resteasy-yaml-provider`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22resteasy-yaml-provider%22)
Affected versions of the package are vulnerable to remote code execution. It was discovered that under certain conditions RESTEasy could be forced to parse a request with YamlProvider, resulting in unmarshalling of potentially untrusted data. An attacker could possibly use this flaw execute arbitrary code with the permissions of the application using RESTEasy.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2016-9571)
