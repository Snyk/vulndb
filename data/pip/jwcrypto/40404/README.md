## Overview
[`jwcrypto`](https://pypi.python.org/pypi/jwcrypto) is a Implementation of JOSE Web standards
The `Rsa15` class in the RSA 1.5 algorithm implementation in jwa.py in jwcrypto before 0.3.2 lacks the Random Filling protection mechanism, which makes it easier for remote attackers to obtain cleartext data via a Million Message Attack (MMA).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6298)
- [GitHub Issue](https://github.com/latchset/jwcrypto/issues/65)
- [GitHub PR](https://github.com/latchset/jwcrypto/pull/66)
- [GitHub Commit](https://github.com/latchset/jwcrypto/commit/eb5be5bd94c8cae1d7f3ba9801377084d8e5a7ba)
