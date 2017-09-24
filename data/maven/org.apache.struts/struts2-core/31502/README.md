## Overview
[Apache Struts2](http://struts.apache.org/) is a popular open-source framework for developing web applications in the Java programming language.

Affected versions of this package are vulnerable to Denial of Service (ReDoS) attacks. The REST Plugin is using outdated XStream library which is vulnerable and allow perform a DoS attack using malicious request with specially crafted XML payload.

## Remediation
Upgrade `org.apache.struts:struts2-core` to version 2.3.34, 2.5.13 or higher.

## References
- [Struts Security Bulletin](http://struts.apache.org/docs/s2-051.html)
