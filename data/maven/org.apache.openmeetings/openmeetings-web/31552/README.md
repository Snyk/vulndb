## Overview
[`org.apache.openmeetings:openmeetings-web`](https://openmeetings.apache.org) is a module for all Wicket based UI OpenMeetings components.

Affected versions of the package are vulnerable to Cryptographic Issues.
Apache OpenMeetings 1.0.0 uses not very strong cryptographic storage, captcha is not used in registration and forget password dialogs and auth forms missing brute force protection.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-web` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7673)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L76)
- [Github Commit](https://github.com/apache/openmeetings/commit/0c3e780248b2afdd25f17a9ccec902d3adcd5a1c)
