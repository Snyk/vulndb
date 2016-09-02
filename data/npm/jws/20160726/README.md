## Overview
Since "algorithm" isn't enforced in `jws.verify()`, a malicious user could choose what algorithm is sent to the server. If the server is expecting RSA but is sent HMAC-SHA with RSA's public key, the server will think the public key is actually an HMAC private key. This could be used to forge any data an attacker wants.

In addition, there is the `none` algorithm to be concerned about.  In versions prior to 2.0.0, verification of the token could be bypassed when the `alg` field is set to `none`.

Source: _Node Security Project_

## Remediation
Upgrade `jws` to version `3.0.0` or later.

## References
https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/

