## Overview
Affected version of [`github.com/dgrijalva/jwt-go`](https://github.com/dgrijalva/jwt-go) could lead to authentication bypass vulnerability when used incorrectly. To address the issue, as of version `3.0.0`, key types are not compatible across signing methods.

> Release notes: Dropped support for `[]byte` keys when using RSA signing methods. This convenience feature could contribute to security vulnerabilities involving mismatched key types with signing methods.

## References
- [Auth0 Blog](https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/)
- [GitHub Changelog](https://github.com/dgrijalva/jwt-go/blob/master/VERSION_HISTORY.md#300)
- [GitHub Issue](https://github.com/dgrijalva/jwt-go/issues/177)
- [GitHub Issue #2](https://github.com/dgrijalva/jwt-go/issues/201)
