## Overview
[`org.apache.openemeetings:openmeetings-core`](https://openemeetings.apache.org) is a module for OpenMeetings core and red5 related classes and services.

Affected versions of the package are vulnerable to Access Restriction Bypass.
Apache OpenMeetings 1.0.0 updates user password in insecure manner.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-core` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7688)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L165)
- [Github Commit](https://github.com/apache/openmeetings/commit/13fe2f382240eab90f3050ecb7ea84d7121f4081)
