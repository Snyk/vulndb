## Overview
[`org.apache.openmeetings:openmeetings-web`](https://openmeetings.apache.org) is a module for all Wicket based UI OpenMeetings components.

Affected versions of the package are vulnerable to Access Restriction Bypass.
The sendHashByUser function in Apache OpenMeetings before 3.1.1 generates predictable password reset tokens, which makes it easier for remote attackers to reset arbitrary user passwords by leveraging knowledge of a user name and the current system time.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-web` to version 3.1.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-0783)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L198)
- [Github Commit](https://github.com/apache/openmeetings/commit/8ddc1caf8ce15b6caa7e45505c6b18bfdafc6746)
