## Overview
Affected versions of [`org.apache.knox:gateway`](https://knox.apache.org) are vulnerable to Privilage Escalation.
For versions of Apache Knox from 0.2.0 to 0.11.0 - an authenticated user may use a specially crafted URL to impersonate another user while accessing WebHDFS through Apache Knox. This may result in escalated privileges and unauthorized data access. While this activity is audit logged and can be easily associated with the authenticated user, this is still a serious security issue. All users are recommended to upgrade to the Apache Knox 0.12.0 release.


## Remediation
Upgrade `org.apache.knox:gateway` to version 0.12.0 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/05/26/1)
- [Github Issue](https://nvd.nist.gov/vuln/detail/CVE-2017-5646)
