## Overview
[`cryptography`](https://pypi.python.org/pypi/cryptography) provides cryptographic recipes and primitives to Python developers.

Affected versions of this package are vulnerable to Use of a Risky Cryptographic Algorithm. HKDF in cryptography before 1.5.2 returns an empty byte-string if used with a length less than `algorithm.digest_size`.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9243)
- [GitHub Issue](https://github.com/pyca/cryptography/issues/3211)
- [GitHub PR](https://github.com/pyca/cryptography/pull/3215)
- [GitHub Commit](https://github.com/pyca/cryptography/commit/b924696b2e8731f39696584d12cceeb3aeb2d874)
