## Overview
[`json-jwt`](https://rubygems.org/gems/json-jwt) is JSON Web Token and its family (JSON Web Signature, JSON Web Encryption and JSON Web Key) in Ruby.

Affected versions of the package are vulnerable to Timing Attacks due to not comparing the HMAC hashes in constant time. A malicious user could guess the valid HMAC hash during the comparison time with an algorithm.

## Remediation
Upgrade `json-jwt` to version 0.6.1 or higher.

## References
- [Github PR](https://github.com/nov/json-jwt/pull/15)
- [Github Commit](https://github.com/nov/json-jwt/commit/5c97c7ed650bb1d0bce6224710c7a53647489429)
