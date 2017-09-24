## Overview
[`keyring`](https://pypi.python.org/pypi/keyring) is a Store and access your passwords safely.
Affected versions of this package are vulnerable to weak password encryption attacks.
Python Keyring 0.9.1 does not securely initialize the cipher when encrypting passwords for CryptedFileKeyring files, which makes it easier for local users to obtain passwords via a brute-force attack.

## Remediation
Upgrade to version `0.9.1` or greater.

## References
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2012-4571)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2012-4571)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/10/31/8)
