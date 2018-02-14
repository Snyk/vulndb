## Overview
[pycrypto](https://pypi.org/project/pycrypto/) is a collection of both secure hash functions (such as SHA256 and RIPEMD160), and various encryption algorithms (AES, DES, RSA, ElGamal, etc.).

Affected versions of this package are vulnerable to Insecure Encryption, which can lead to Information Exposure.

It generates weak `ElGamal` key parameters, which allows attackers to obtain sensitive information by reading ciphertext data (i.e., it does not have semantic security in face of a ciphertext-only attack).
The Decisional Diffie-Hellman (DDH) assumption does not hold for PyCrypto's ElGamal implementation.

## Remediation
There is no fixed version for `pycrypto`.

## References
- [PoC](https://github.com/TElgamal/attack-on-pycrypto-elgamal)
- [GitHub Issue]https://github.com/dlitz/pycrypto/issues/253)
