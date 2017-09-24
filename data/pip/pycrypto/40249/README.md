## Overview
[`pycrypto`](https://pypi.python.org/pypi/pycrypto) is a Cryptographic modules for Python.

Heap-based buffer overflow in the ALGnew function in block_templace.c in Python Cryptography Toolkit (aka pycrypto) allows remote attackers to execute arbitrary code as demonstrated by a crafted iv parameter to cryptmsg.py.

## Remediation
The fix is merged to the master branch but not yet published

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-7459)
- [Github Issue](https://github.com/dlitz/pycrypto/issues/176)
- [Github Commit](https://github.com/dlitz/pycrypto/commit/8dbe0dc3eea5c689d4f76b37b93fe216cf1f00d4)
