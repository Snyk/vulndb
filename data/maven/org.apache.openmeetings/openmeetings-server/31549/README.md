## Overview
[`org.apache.openmeetings:openmeetings-server`](https://openmeetings.apache.org) is a module for OpenMeetings server assembly.

Affected versions of the package are vulnerable to Arbitary File Read.
The (1) FileService.importFileByInternalUserId and (2) FileService.importFile SOAP API methods in Apache OpenMeetings before 3.1.1 improperly use the Java URL class without checking the specified protocol handler, which allows remote attackers to read arbitrary files by attempting to upload a file.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-server` to version 3.1.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-2164)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L241)
