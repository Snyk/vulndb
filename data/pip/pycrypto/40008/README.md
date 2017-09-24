## Overview
[`pycrypto`](https://pypi.python.org/pypi/pycrypto) is a Cryptographic module for Python.

Affected versions of this package are vulnerable Information Exposure.
The Crypto.Random.atfork function in PyCrypto before 2.6.1 does not properly reseed the pseudo-random number generator (PRNG) before allowing a child process to access it, which makes it easier for context-dependent attackers to obtain sensitive information by leveraging a race condition in which a child process is created and accesses the PRNG within the same rate-limit period as another process.

## Remediation
Upgrade to version `2.6.1` or greater.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-1445)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-1445)
