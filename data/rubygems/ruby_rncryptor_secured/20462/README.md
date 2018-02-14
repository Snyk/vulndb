## Overview
[`ruby_rncryptor_secured`](https://rubygems.org/gems/ruby_rncryptor_secured)  is an Encryptor and Decryptor for the RNCryptor format.

Affected versions of the package are vulnerable to Timing Attacks due to not comparing the HMAC hashes in constant time. A malicious user could guess the valid HMAC hash during the comparison time with an algorithm.

## Remediation
There is no fix version for `ruby_rncryptor_secured`.

## References
- [oss-security](http://www.openwall.com/lists/oss-security/2016/01/24/10)
- [GitHub issue](https://github.com/RNCryptor/ruby_rncryptor/issues/3)
