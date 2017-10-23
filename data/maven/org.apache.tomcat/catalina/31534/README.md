## Overview
Affected versions of [`org.apache.tomcat:catalina`](https://tomcat.apache.org) are vulnerable to Arbitrary Code Execution.
When running Apache Tomcat 7.0.0 to 7.0.79 on Windows with HTTP PUTs enabled (e.g. via setting the readonly initialisation parameter of the Default to false) it was possible to upload a JSP file to the server via a specially crafted request. This JSP could then be requested and any code it contained would be executed by the server.

The fix for this vulnerability was incomplete, see [CVE-2017-12617](https://snyk.io/vuln/SNYK-JAVA-ORGAPACHETOMCAT-31537).

## Remediation
Upgrade `org.apache.tomcat:catalina` to version 7.0.81 or higher.

## References
- [Apache Mailing List](https://lists.apache.org/thread.html/8fcb1e2d5895413abcf266f011b9918ae03e0b7daceb118ffbf23f8c@%3Cannounce.tomcat.apache.org%3E)
- [RedHat Security Bulletin](https://access.redhat.com/security/cve/cve-2017-12615)
- [ExploitDB](https://www.exploit-db.com/exploits/42953/)
