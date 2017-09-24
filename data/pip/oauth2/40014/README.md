## Overview
[`oauth2`](https://pypi.python.org/pypi/oauth2) is a library for OAuth version 1.9

Affected versions of this package are vulnerable to Insecure Randomness.
The (1) make_nonce, (2) generate_nonce, and (3) generate_verifier functions in SimpleGeo python-oauth2 uses weak random numbers to generate nonces, which makes it easier for remote attackers to guess the nonce via a brute force attack.

## Remediation
Upgrade to version `1.5.211` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4347)
- [GitHub Issue](https://github.com/simplegeo/python-oauth2/issues/9)
- [Openwall](http://www.openwall.com/lists/oss-security/2013/09/12/7)
- [GitHub PR](https://github.com/simplegeo/python-oauth2/pull/146)
