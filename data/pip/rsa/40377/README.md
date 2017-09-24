## Overview
[`rsa`](https://pypi.python.org/pypi/rsa) is a Pure-Python RSA implementation.

The verify function in the RSA package for Python (Python-RSA) before 3.3 allows attackers to spoof signatures with a small public exponent via crafted signature padding, aka a Berserk attack.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1494)
- [Bitbucket PR](https://bitbucket.org/sybren/python-rsa/pull-requests/14/security-fix-bb06-attack-in-verify-by/diff)
- [Bitbucket Commit](https://bitbucket.org/sybren/python-rsa/commits/0cbcc529926afd61c6df4f50cfc29971beafd2c2?at=default)
