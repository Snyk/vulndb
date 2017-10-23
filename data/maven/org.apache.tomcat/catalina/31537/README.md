## Overview
Affected versions of [`org.apache.tomcat:catalina`](https://tomcat.apache.org) are vulnerable to Arbitrary Code Execution.
When running Apache Tomcat versions 9.0.0.M1 to 9.0.0, 8.5.0 to 8.5.22, 8.0.0.RC1 to 8.0.46 and 7.0.0 to 7.0.81 with HTTP PUTs enabled (e.g. via setting the readonly initialisation parameter of the Default servlet to false) it was possible to upload a JSP file to the server via a specially crafted request. This JSP could then be requested and any code it contained would be executed by the server.

This is due to an incomplete fix for [CVE-2017-12615](https://snyk.io/vuln/SNYK-JAVA-ORGAPACHETOMCAT-31534).

## Remediation
Upgrade `org.apache.tomcat:catalina` to version 7.0.82, 8.0.46, 8.5.22, 9.0.1 or higher.

## References
- [Apache Mailing List](https://lists.apache.org/thread.html/3fd341a604c4e9eab39e7eaabbbac39c30101a022acc11dd09d7ebcb@%3Cannounce.tomcat.apache.org%3E)
- [Apache Tomcat Bugzilla](https://bz.apache.org/bugzilla/show_bug.cgi?id=61542)
- [GitHub Changelog](https://github.com/apache/tomcat/blob/52a2f5ba1eb954c93d52897b25d3599bda271f88/webapps/docs/changelog.xml#L51)
- [PoC by cyberheartmi9](https://github.com/cyberheartmi9/CVE-2017-12617)
- [Apache Security Bulletin](http://tomcat.apache.org/security-8.html)
- [RedHat Security Bulletin](https://access.redhat.com/security/cve/cve-2017-12617)
