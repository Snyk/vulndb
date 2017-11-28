## Overview
[`org.apache.openmeetings:openmeetings-server`](https://openmeetings.apache.org) is a module for OpenMeetings server assembly.

Affected versions of the package are vulnerable to Access Restriction Bypass.
Apache OpenMeetings 1.0.0 has an overly permissive crossdomain.xml file. This allows for flash content to be loaded from untrusted domains.

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-server` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7680)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L89)
- [Github Commit](https://github.com/apache/openmeetings/commit/5889b5beda3299418cf80ee68846ea5ce54ee9ed)
