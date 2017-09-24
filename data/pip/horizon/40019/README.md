## Overview
[`horizon`](https://pypi.python.org/pypi/horizon) is a The OpenStack Dashboard.

Affected versions of this package are vulnerable to Authorization Bypass.
The Identity v3 API in OpenStack Dashboard (Horizon) before 2013.2 does not require the current password when changing passwords for user accounts, which makes it easier for remote attackers to change a user password by leveraging the authentication token for that user.

## Remediation
Upgrade to version `2013.2` or greater.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-4471)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4471)
