## Overview
[`org.apache.axis2:axis2`](https://axis2.apache.org) is a Web Services / SOAP / WSDL engine, the successor to Apache Axis SOAP stack.

Affected versions of the package are vulnerable to Session Fixation in the administrative interface at the path `/axis2/axis2-admin`. Attacker can exploit this flaw by doing a Cross-Site Scripting (XSS) attack and get his Session cookie and perform session hijacking attack.

## Remediation
Upgrade `axis2` to version 1.7.4 or higher.

## References
- [Apache Jira Issue](https://issues.apache.org/jira/browse/AXIS2-4739)
- [Github Commit](https://github.com/apache/axis2-java/commit/45cdd6f56d5b1d297d49836beb0d91d62b5864e6)
