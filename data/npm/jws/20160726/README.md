## Overview
[`jws`](https://www.npmjs.com/package/jws) is an implementation of JSON Web Signatures.
Affected versions of this package are vulnerable to an Authentication Bypass attack, due to the "algorithm" not being enforced in `jws.verify()`. Attackers are given the opportunity to choose the algorithm sent to the server and generate signatures with arbitrary contents. The server expects an asymmetric key (RSA) but is sent a symmetric key (HMAC-SHA) with RSA's public key, so instead of going through a key validation process, the server will think the public key is actually an HMAC private key. 

## Remediation
Upgrade `jws` to version `3.0.0` or later.

## References
- https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/
