## Overview
[`encryptor`](https://rubygems.org/gems/encryptor) is a simple wrapper for the standard ruby OpenSSL library to encrypt and decrypt strings.

Affected versions of the package are vulnerable to Insecure Encryption due to encrypting all messages using the same `key/nonce`. This exposed the `XOR` of the plaintexts and also leaked the `AES-GCM` authentication key, allowing an attacker to forge messages and potentially perform chosen ciphertext attacks.

## Remediation
Upgrade `encryptor` to version 3.0.0 or higher.

## References
- [Github ChangeLog](https://github.com/attr-encrypted/encryptor/blob/master/CHANGELOG.md#300)
- [Github PR](https://github.com/attr-encrypted/encryptor/pull/22)
- [Github Commit](https://github.com/attr-encrypted/encryptor/commit/b946c1806d620e452a8f88f94387a527c3da2715)
