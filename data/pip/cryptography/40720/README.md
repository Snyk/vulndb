## Overview
Affected versions of [`cryptography`](https://pypi.python.org/pypi/cryptography) are vulnerable to Denial of Service (DoS).

Double free vulnerability in the dsa_priv_decode function in crypto/dsa/dsa_ameth.c in OpenSSL 1.0.1 before 1.0.1s and 1.0.2 before 1.0.2g allows remote attackers to cause a denial of service (memory corruption) or possibly have unspecified other impact via a malformed DSA private key. (related to CVE-2016-0705)

## Remediation
Upgrade `cryptography` to version 0.9.1 or higher.

## References
- [GitHub Changelog](https://github.com/pyca/cryptography/blob/master/CHANGELOG.rst#091---2015-06-06)
- [Github PR](https://github.com/pyca/cryptography/pull/2013)
- [Gtihub Commit](https://github.com/pyca/cryptography/commit/87c99a503a699f5c0296636237a9208fc161cc9e)
