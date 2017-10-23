## Overview
Affected versions of [`org.apache.tomcat:catalina`](https://tomcat.apache.org) are vulnerable to Access Restriction Bypass.
The CORS Filter in Apache Tomcat 9.0.0.M1 to 9.0.0.M21, 8.5.0 to 8.5.15, 8.0.0.RC1 to 8.0.44 and 7.0.41 to 7.0.78 did not add an HTTP Vary header indicating that the response varies depending on Origin. This permitted client and server side cache poisoning in some circumstances.

## Remediation
Upgrade `org.apache.tomcat:catalina` to version 7.0.79, 8.0.45, 8.5.16, 9.0.0.M22 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7674)
- [Github Commit](https://github.com/apache/tomcat/commit/b94478d45b7e1fc06134a785571f78772fa30fed)
