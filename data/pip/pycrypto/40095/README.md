## Overview
[`pycrypto`](https://pypi.python.org/pypi/pycrypto) is a Cryptographic module for Python.

PyCrypto before 2.6 does not produce appropriate prime numbers when using an ElGamal scheme to generate a key, which reduces the signature space or public key space and makes it easier for attackers to conduct brute force attacks to obtain the private key.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-2417)
- [Github Commit](https://github.com/Legrandin/pycrypto/commit/9f912f13df99ad3421eff360d6a62d7dbec755c2)
