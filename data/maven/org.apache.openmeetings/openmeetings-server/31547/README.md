## Overview
[`org.apache.openmeetings:openmeetings-server`](https://openmeetings.apache.org) is a module for OpenMeetings server assembly.

Affected versions of the package are vulnerable to Information Disclosure.
Apache OpenMeetings 1.0.0 displays Tomcat version and detailed error stack trace, which is not secure.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-server` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7683)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L128)
