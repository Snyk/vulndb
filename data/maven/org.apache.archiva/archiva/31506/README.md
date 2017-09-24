## Overview
Affected versions of [`org.apache.archiva:archiva`](https://archiva.apache.org) are vulnerable to Cross-Site Request Forgery (CSRF).
Several REST service endpoints of Apache Archiva are not protected against Cross Site Request Forgery (CSRF) attacks. A malicious site opened in the same browser as the archiva site, may send an HTML response that performs arbitrary actions on archiva services, with the same rights as the active archiva session (e.g. administrator rights).

## Remediation
Upgrade `org.apache.archiva:archiva` to version 2.2.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-5657)
- [Apache Archiva Security Bulletin](http://archiva.apache.org/security.html#CVE-2017-5657:_Apache_Archiva_CSRF_vulnerabilities_for_various_REST_endpoints)
- [Openwall](http://www.openwall.com/lists/oss-security/2017/05/19/4)
