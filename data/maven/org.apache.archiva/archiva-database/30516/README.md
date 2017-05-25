## Overview
[`org.apache.archiva:archiva-database`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22archiva-database%22)
Apache Archiva 1.0 through 1.0.3, 1.1 through 1.1.4, 1.2 through 1.2.2, and 1.3 through 1.3.1 does not require entry of the administrator's password at the time of modifying a user account, which makes it easier for context-dependent attackers to gain privileges by leveraging a (1) unattended workstation or (2) cross-site request forgery (CSRF) vulnerability, a related issue to CVE-2010-3449.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-4408)