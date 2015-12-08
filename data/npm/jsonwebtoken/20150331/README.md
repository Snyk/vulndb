## Overview

It is possible for an attacker to bypass verification. The verification part is expecting a token digitally signed with an asymetric key (RS/ES family) of algorithms; instead, the attacker sends a token digitally signed with a symmetric algorithm (HS* family).

_Source: [Node Security Project](https://nodesecurity.io/advisories/17)_

## Remediation
Ugrade to version 4.2.2 or greater.

## References
- https://nodesecurity.io/advisories/17
- https://github.com/auth0/node-jsonwebtoken/commit/1bb584bc382295eeb7ee8c4452a673a77a68b687
- https://www.timmclean.net/2015/02/25/jwt-alg-none.html
- https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/
