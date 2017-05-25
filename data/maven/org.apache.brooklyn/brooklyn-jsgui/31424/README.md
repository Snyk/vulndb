## Overview
[`org.apache.brooklyn:brooklyn-jsgui`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22brooklyn-jsgui%22)
Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. Any authenticated user can cause scripts to run in the browser of another user authorized to access the first user’s resources. This is due to improper escaping of server-side content.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-3165)
- [Brooklyn Security Advisory](https://brooklyn.apache.org/community/security/CVE-2017-3165.html)
