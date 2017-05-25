## Overview
[`org.apache.myfaces.commons:myfaces-commons`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22myfaces-commons%22)
shared/util/StateUtils.java in Apache MyFaces 1.1.x before 1.1.8, 1.2.x before 1.2.9, and 2.0.x before 2.0.1 uses an encrypted View State without a Message Authentication Code (MAC), which makes it easier for remote attackers to perform successful modifications of the View State via a padding oracle attack.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-2057)