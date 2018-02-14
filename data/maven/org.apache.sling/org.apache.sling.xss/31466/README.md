## Overview
[`org.apache.sling:org.apache.sling.xss`](https://sling.apache.org/) is a framework for RESTful web-applications based on an extensible content tree.

Affected versions of the package are vulnerable to XML External Entity (XXE) Injection.
In the XSS Protection API module before 1.0.12 in Apache Sling, the method `XSS.getValidXML()` uses an insecure SAX parser to validate the input string, which allows for XXE attacks in all scripts which use this method to validate user input, potentially allowing an attacker to read sensitive data on the filesystem, perform same-site-request-forgery (SSRF), port-scanning behind the firewall or DoS the application.

## Remediation
Upgrade `org.apache.sling:org.apache.sling.xss` to version 1.0.12 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/07/18/2)
