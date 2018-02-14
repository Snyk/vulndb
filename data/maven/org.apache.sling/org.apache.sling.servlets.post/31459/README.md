## Overview
[`org.apache.sling:org.apache.sling.servlets.post`](https://sling.apache.org/) is a framework for RESTful web-applications based on an extensible content tree.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `org.apache.sling:org.apache.sling.servlets.post` to version 2.3.23 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/08/14/2)
- [Jira Issue](https://issues.apache.org/jira/browse/SLING-7041)
