## Overview
[`org.apache.openmeetings:openmeetings-server`](https://openmeetings.apache.org) is a module for OpenMeetings server assembly.

Affected versions of this package are vulnerable to SQL Injection.
Apache OpenMeetings 1.0.0 is vulnerable to SQL injection. This allows authenticated users to modify the structure of the existing query and leak the structure of other queries being made by the application in the back-end.

You can read more about `SQL Injection` on our [blog](https://snyk.io/blog/sql-injection-orm-vulnerabilities/).

## Remediation
Upgrade `org.apache.openmeetings:openmeetings-server` to version 3.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7681)
- [Github ChangeLog](https://github.com/apache/openmeetings/blob/13cb2edcc2429829bf5bc5629b9cecf9a959a8f7/openmeetings-server/src/site/xdoc/security.xml#L102)
