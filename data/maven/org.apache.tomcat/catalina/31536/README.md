## Overview
Affected versions of [`org.apache.tomcat:catalina`](https://tomcat.apache.org) are vulnerable to Access Restriction Bypass.
When using a VirtualDirContext with Apache Tomcat 7.0.0 to 7.0.80 it was possible to bypass security constraints and/or view the source code of JSPs for resources served by the VirtualDirContext using a specially crafted request.

## Remediation
Upgrade `org.apache.tomcat:catalina` to version 7.0.81 or higher.

## References
- [Apache Mailing List](https://lists.apache.org/thread.html/1df9b4552464caa42047062fe7175da0da06c18ecc8daf99258bbda6@%3Cannounce.tomcat.apache.org%3E)
- [RedHat Security Bulletin](https://access.redhat.com/security/cve/cve-2017-12616)
