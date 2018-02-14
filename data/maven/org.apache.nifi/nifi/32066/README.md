## Overview
[org.apache.nifi:nifi](https://nifi.apache.org/) is a system to process and distribute data.

Affected versions of this package are vulnerable to Host Header Injection.
A malicious host header in an incoming HTTP request could cause NiFi to load resources from an external server.

## Remediation
Upgrade org.apache.nifi:nifi to version 1.5.0 or higher.
## References
- [NiFi Security Advisory](https://nifi.apache.org/security.html#CVE-2017-12632)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12632)

