## Overview
['jwt-simple'](https://www.npmjs.com/package/jwt-simple) is a `JSON Web Token` encode and decode module.
Affected versions of this package are vulnerable to an Authentication Bypass attack, due to the "algorithm" not being enforced. Attackers are given the opportunity to choose the algorithm sent to the server and generate signatures with arbitrary contents. The server expects an asymmetric key (RSA) but is sent a symmetric key (HMAC-SHA) with RSA's public key, so instead of going through a key validation process, the server will think the public key is actually an HMAC private key.

## Remediation
Upgrade `jwt-simple` to version 0.3.0 or higher.

## References
- https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/
- https://github.com/hokaccha/node-jwt-simple/pull/14
- https://github.com/hokaccha/node-jwt-simple/pull/16
- https://github.com/hokaccha/node-jwt-simple/commit/957957cfa44474049b4603b293569588ee9ffd97
