## Overview:

It is possible for an attacker to bypass verification when "a token digitally signed with an asymetric key (RS/ES family) of algorithms but instead the attacker send a token digitally signed with a symmetric algorithm (HS* family)" [1]

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:
Update to a version 4.2.2 or greater

## References:
- [1] https://github.com/auth0/node-jsonwebtoken/commit/1bb584bc382295eeb7ee8c4452a673a77a68b687
- https://www.timmclean.net/2015/02/25/jwt-alg-none.html
- https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/
