## Overview
[`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) is a JSON Web token implementation for symmetric and asymmetric keys.
Affected versions of this package are vulnerable to an Authentication Bypass attack, due to the "algorithm" not being enforced. Attackers are given the opportunity to choose the algorithm sent to the server and generate signatures with arbitrary contents. The server expects an asymmetric key (RSA) but is sent a symmetric key (HMAC-SHA) with RSA's public key, so instead of going through a key validation process, the server will think the public key is actually an HMAC private key.

## Remediation
Upgrade `jsonwebtoken` to version 4.2.2 or greater.

## References
- https://github.com/auth0/node-jsonwebtoken/commit/1bb584bc382295eeb7ee8c4452a673a77a68b687
- https://www.timmclean.net/2015/02/25/jwt-alg-none.html
- https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/
