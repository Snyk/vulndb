## Overview
[`org.apache.axis2:axis2`](https://axis2.apache.org) is a Web Services / SOAP / WSDL engine, the successor to Apache Axis SOAP stack.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `axis2` to version 1.7.4 or higher.

## References
- [Apache Jira Issue](https://issues.apache.org/jira/browse/AXIS2-5683)
- [Github Commit](https://github.com/apache/axis2-java/commit/1b560264151217dae8b34b6aa4dfff4f51377656)
