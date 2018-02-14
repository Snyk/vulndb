## Overview
[`oic`](http://pypi.python.org/pypi/oic) is Python implementation of OAuth2 and OpenID Connect.

Affected versions of the package are vulnerable to Insecure Encryption due to using a weak key derivation function and constant (initialization vector).

## Remediation
Upgrade `oic` to version 0.11.0.0 or higher.

## References
- [GitHub Changelog](https://github.com/OpenIDC/pyoidc/blob/master/CHANGELOG.md#security)
- [GitHub PR](https://github.com/OpenIDC/pyoidc/pull/354)
- [GitHub Issue](https://github.com/OpenIDC/pyoidc/issues/349)
- [GitHub Commit](https://github.com/OpenIDC/pyoidc/commit/64665112587ef43a57cb09442dd5dd3d175f583e)
