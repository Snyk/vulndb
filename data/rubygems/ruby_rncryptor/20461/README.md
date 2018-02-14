## Overview
[`ruby_rncryptor`](https://rubygems.org/gems/ruby_rncryptor) is Encrypt and Decrypt the RNCryptor format.

Affected versions of the package are vulnerable to Timing Attacks due to not comparing the HMAC hashes in constant time. A malicious user could guess the valid HMAC hash during the comparison time with an algorithm.

## Remediation
Upgrade `ruby_rncryptor` to version 3.0.1 or higher.

## References
- [Github Issue](https://github.com/RNCryptor/ruby_rncryptor/issues/3)
- [Github Commit](https://github.com/RNCryptor/ruby_rncryptor/commit/866304db8e4870560da14dab90efef814cb4afba)
