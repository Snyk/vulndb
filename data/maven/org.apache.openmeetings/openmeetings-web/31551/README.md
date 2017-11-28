## Overview
[`org.apache.openmeetings:openmeetings-web`](https://openmeetings.apache.org) is a module for all Wicket based UI OpenMeetings components.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).
Apache OpenMeetings 1.0.0 is vulnerable to Cross-Site Request Forgery (CSRF) attacks, XSS attacks, click-jacking, and MIME based attacks.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-web` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7666)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L64)
- [Github Commit](https://github.com/apache/openmeetings/commit/44800f8a18c7e9a30b379ef057067cb26181b532)
