## Overview
[`org.apache.myfaces.core:myfaces-core-project`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22myfaces-core-project%22)
Apache MyFaces 1.1.7 and 1.2.8, as used in IBM WebSphere Application Server and other applications, does not properly handle an unencrypted view state, which allows remote attackers to conduct cross-site scripting (XSS) attacks or execute arbitrary Expression Language (EL) statements via vectors that involve modifying the serialized view object.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-2086)