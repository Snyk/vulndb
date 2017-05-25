## Overview
[`aescrypt`](https://rubygems.org/gems/aescrypt) is a simple AES encryption / decryption for Ruby.

Affected versions of the package are vulnerable to Insecure Encryption because it does not randomize the `CBC IV` for use with the `AESCrypt.encrypt` and `AESCrypt.decrypt` functions, which allows attackers to defeat cryptographic protection mechanisms via a chosen plaintext attack.

## Remediation
There is no fix version for `aescrypt`.

## References
- [Github Issue](https://github.com/Gurpartap/aescrypt/issues/4)
