## Overview
[`net-http-digest_auth`](https://rubygems.org/gems/net-http-digest_auth) is an implementation of RFC 2617 - Digest Access Authentication.

Affected versions of the package are vulnerable to Insecure Randomness due to using `Kernel#rand` which returns a pseudo-random number, which could be easily guessed, and shouldn't be used in a security-sensitive context.

## Remediation
Upgrade `net-http-digest_auth` to version 1.3 or higher.

## References
- [GitHub Commit](https://github.com/drbrain/net-http-digest_auth/commit/62385e62276e1783bce746728406942caa32cab3)
