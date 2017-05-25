## Overview
[`aescrypt`](https://rubygems.org/gems/aescrypt) is Simple AES encryption / decryption for Ruby.
Affected versions of the package are vulnerable to Chosen Cyphertext Attack. Is uses an unauthenticated encryption mode (CBC) which is vulnerable to chosen ciphertext attacks, allowing active attackers to completely recover message plaintexts. It also allows attackers to make undetectable alterations to the plaintext.

## Remediation
There is no fix version for `aescrypt`.

## References

- [GitHub Issue](https://github.com/Gurpartap/aescrypt/issues/12)
