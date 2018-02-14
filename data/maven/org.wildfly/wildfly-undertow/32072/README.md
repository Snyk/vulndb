## Overview
[org.wildfly:wildfly-undertow](https://github.com/wildfly/wildfly) is an application that helps you build applications.

Affected versions of this package are vulnerable to Directory Traversal through the `ServletResourceManager.getResource` method which could lead to the disclosure of arbitrary local files.

## Remediation
Upgrade `org.wildfly:wildfly-undertow` to version `12.0.0.Alpha1` or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-1047)
- [RedHat Security Advisory](https://access.redhat.com/security/cve/cve-2018-1047)
- [GitHub PR](https://github.com/wildfly/wildfly/pull/10748)
- [JBoss Issue](https://issues.jboss.org/browse/WFLY-9620)
