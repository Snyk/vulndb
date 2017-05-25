## Overview
[`org.apache.directory.studio:org.apache.directory.studio.ldapbrowser.core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22org.apache.directory.studio.ldapbrowser.core%22)
The CSV export in Apache LDAP Studio and Apache Directory Studio before 2.0.0-M10 does not properly escape field values, which might allow attackers to execute arbitrary commands by leveraging a crafted LDAP entry that is interpreted as a formula when imported into a spreadsheet.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5349)