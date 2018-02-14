## Overview
[`org.apache.openemeetings:openmeetings-core`](https://openemeetings.apache.org) is a module for OpenMeetings core and red5 related classes and services.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-core` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7663)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L42)
- [Github Commit](https://github.com/apache/openmeetings/commit/7dde5a9df6e0a44553353f0ed9377a745f315c17)
