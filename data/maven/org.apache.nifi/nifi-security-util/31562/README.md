## Overview
[`org.apache.nifi:nifi-security-util`](https://nifi.apache.org) is an easy to use, powerful, and reliable system to process and distribute data.

Affected versions of the package are vulnerable to XML External Entity (XXE) Injection.
An authorized user could upload a template which contained malicious code and accessed sensitive files via an XML External Entity (XXE) attack. The fix to properly handle XML External Entities was applied on the Apache NiFi 1.4.0 release. Users running a prior 1.x release should upgrade to the appropriate release.

## Remediation
Upgrade `org.apache.nifi:nifi-security-util` to version 1.4.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12623)
- [Apache Nifi Security](https://nifi.apache.org/security.html#CVE-2017-12623)
