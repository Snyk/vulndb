## Overview
[`org.apache.openmeetings:openmeetings-web`](https://openmeetings.apache.org) is a module for all Wicket based UI OpenMeetings components.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.
When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-web` to version 3.1.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-2163)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L227)
