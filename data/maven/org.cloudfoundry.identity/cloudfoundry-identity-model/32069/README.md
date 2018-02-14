## Overview
[org.cloudfoundry.identity:cloudfoundry-identity-model](https://github.com/cloudfoundry/uaa/) is a multi tenant identity management service, used in Cloud Foundry, but also available as a stand alone OAuth2 server.

Affected versions of this package are vulnerable to Cross Site Scripting (XSS) Attack via the clientId parameter of a specific request. 

## Remediation
Upgrade `org.cloudfoundry.identity:cloudfoundry-identity-model` to version 3.20.3

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-1190)
- [CloudFoundry](https://www.cloudfoundry.org/blog/cve-2018-1190/)
