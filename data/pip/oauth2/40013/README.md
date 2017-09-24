## Overview
[`oauth2`](https://pypi.python.org/pypi/oauth2) is a library for OAuth version 1.9
The Server.verify_request function in SimpleGeo python-oauth2 does not check the nonce, which allows remote attackers to perform replay attacks via a signed URL.

## Remediation
Upgrade to version `1.5.211` or greater.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-4346)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4346)
- [GitHub Issue](https://github.com/simplegeo/python-oauth2/issues/129)
