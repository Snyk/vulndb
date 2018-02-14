## Overview
[org.apache.cloudstack:cloudstack](https://github.com/apache/cloudstack) is an open source software designed to deploy and manage large networks of virtual machines.

Affected versions of this package are vulnerable to Authentication Bypass. An attacker may determine the ID of another (non-root) CloudStack user, reset the API keys for the other user, in turn accessing their account and resources.

## Remediation
Upgrade `org.apache.cloudstack:cloudstack` to versions 4.8.1.1, 4.9.0.1 or higher.
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-6813)
- [Cloudstack Mailing List Archives](http://mail-archives.apache.org/mod_mbox/cloudstack-announce/201610.mbox/%3CCANLSSBXBFvmPPZGxP1bcqOaee3iaP%2BSgSanv3W_XSE3wq3%3DYHA%40mail.gmail.com%3E)
- [Security Focus](https://www.securityfocus.com/bid/93945)
