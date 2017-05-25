## Overview
[`org.jbehave:jbehave-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jbehave-core%22)
Affected versions of the package are vulnerable to Remote Code Execution. It was found that XStream could deserialize arbitrary user-supplied XML content, representing objects of any type. A remote attacker able to pass XML to XStream could use this flaw to perform a variety of attacks, including remote code execution in the context of the server running the XStream application.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1051277)
