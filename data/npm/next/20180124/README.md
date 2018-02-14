## Overview
[Next](https://www.npmjs.com/package/next) is a minimalistic framework for server-rendered React applications.

Affected versions of this package are vulnerable to Directory Traversal under the `/_next` request namespace.
An attacker can craft a request that accesses potentially sensitive information in your filesystem.

## Remediation
Upgrade `next` to 4.2.3 version or higher.

## References
- [GitHub Release](https://github.com/zeit/next.js/releases/tag/4.2.3)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-6184)
