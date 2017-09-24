## Overview
[`cryptography`](https://pypi.python.org/pypi/cryptography) provides cryptographic recipes and primitives to Python developers.

Affected versions of this package are vulnerable to TLS Truncation. A malicious user can prevent a user from fetching the parts of a message by inserting TCP code into a message indicating the message has completed.

## References
- [GitHub PR](https://github.com/pyca/cryptography/pull/2334)
- [GitHub Commit](https://github.com/pyca/cryptography/commit/41aabcbd2326ae154a16a1a050ee01fb9a54bd19)
