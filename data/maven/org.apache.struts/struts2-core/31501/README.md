## Overview
[Apache Struts2](http://struts.apache.org/) is a popular open-source framework for developing web applications in the Java programming language.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks. This is due to an incomplete fix for [CVE-2017-7672](https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31499). If an application allows enter an URL in a form field and built-in URLValidator is used, it is possible to prepare a special URL which will be used to overload server process when performing validation of the URL.

## Remediation
Upgrade `org.apache.struts:struts2-core` to version 2.3.34, 2.5.13 or higher.

## References
- [Struts Security Bulletin](http://struts.apache.org/docs/s2-050.html)
