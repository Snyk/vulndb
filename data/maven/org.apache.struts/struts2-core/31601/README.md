## Overview
[Apache Struts2](http://struts.apache.org/) is a popular open-source framework for developing web applications in the Java programming language.

Affected versions of this package are vulnerable to Denial of Service (DoS). The REST Plugin is using an outdated JSON-lib library which is vulnerable and allow perform a DoS attack using malicious request with specially crafted JSON payload.

## Remediation
Upgrade `org.apache.struts:struts2-core` to version 2.5.14.1 or higher.

## References
- [GitHub PR](https://cwiki.apache.org/confluence/display/WW/S2-054)
