## Overview
[`org.apache.openmeetings:openmeetings-web`](https://openmeetings.apache.org) is a module for all Wicket based UI OpenMeetings components.

Affected versions of the package are vulnerable to Access Restriction Bypass.
Apache OpenMeetings 1.0.0 responds to the following insecure HTTP methods: PUT, DELETE, HEAD, and PATCH.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-web` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7685)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L153)
- [Github Commit](https://github.com/apache/openmeetings/commit/15ce5da19e724e55851c4a079db30ba5faea73a8)
