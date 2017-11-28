## Overview
[`pyjwt`](http://pypi.python.org/pypi/PyJWT) is a JSON Web Token implementation in Python.

Affected versions of the package are vulnerable to Authentication Bypass.
In PyJWT 1.5.0 and below the `invalid_strings` check in `HMACAlgorithm.prepare_key` does not account for all PEM encoded public keys. Specifically, the PKCS1 PEM encoded format would be allowed because it is prefaced with the string `-----BEGIN RSA PUBLIC KEY-----` which is not accounted for. This enables symmetric/asymmetric key confusion attacks against users using the PKCS1 PEM encoded public keys, which would allow an attacker to craft JWTs from scratch.

## Remediation
Upgrade `pyjwt` to version 1.5.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-11424)
- [Github PR](https://github.com/jpadilla/pyjwt/pull/277)
- [Github Commit](https://github.com/jpadilla/pyjwt/commit/37926ea0dd207db070b45473438853447e4c1392)
