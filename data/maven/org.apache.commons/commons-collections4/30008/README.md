## Overview
[`org.apache.commons:commons-collections4`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22commons-collections4%22)
It was found that the Apache commons-collections library permitted code execution when deserializing objects involving a specially constructed chain of classes. A remote attacker could use this flaw to execute arbitrary code with the permissions of the application using the commons-collections library.

## References
- [breenmachine Blog](http://foxglovesecurity.com/2015/11/06/what-do-weblogic-websphere-jboss-jenkins-opennms-and-your-application-have-in-common-this-vulnerability/)
- [Redhat](https://access.redhat.com/security/cve/CVE-2015-7501)
