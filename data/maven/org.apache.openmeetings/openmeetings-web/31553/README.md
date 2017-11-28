## Overview
[`org.apache.openmeetings:openmeetings-web`](https://openmeetings.apache.org) is a module for all Wicket based UI OpenMeetings components.

Affected versions of the package are vulnerable to Access Restriction Bypass.
Apache OpenMeetings 3.2.0 is vulnerable to parameter manipulation attacks, as a result attacker has access to restricted areas.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-web` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7682)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L116)
- [Github Commit](https://github.com/apache/openmeetings/commit/11052309730dd28bdfbdd9989ab4a01098910867)
