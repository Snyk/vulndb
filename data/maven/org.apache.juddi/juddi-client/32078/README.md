## Overview
[org.apache.juddi:juddi-client](https://juddi.apache.org/) is an open source Java implementation of OASIS the Universal Description, Discovery, and Integration (UDDI) specification for (Web) Services.

Affected versions of this package are vulnerable to XML External Entity (XXE) Injection. Protections against entity expansion and DTD type of attacks were insufficient.

## Remediation
Upgrade `org.apache.juddi:juddi-client` to version 3.3.5 or higher.
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-1307)
- [Juddi Security Advisory](http://juddi.apache.org/security.html)
- [Jira Issue](https://issues.apache.org/jira/browse/JUDDI-987)
