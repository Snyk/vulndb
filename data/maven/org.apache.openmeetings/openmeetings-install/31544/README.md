## Overview
[`org.apache.openmeetings:openmeetings-install`](https://openmeetings.apache.org) is a module for OpenMeetings command line admin and classes necessary for installer.

Affected versions of the package are vulnerable to Directory Traversal.
Directory traversal vulnerability in the Import/Export System Backups functionality in Apache OpenMeetings before 3.1.1 allows remote authenticated administrators to write to arbitrary files via a .. (dot dot) in a ZIP archive entry.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-install` to version 3.1.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-0784)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L211)
- [Github Commit](https://github.com/apache/openmeetings/commit/6e5b1828f7813eedab08a31a46018a86bf715775)
