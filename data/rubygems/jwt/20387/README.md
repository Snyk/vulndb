## Overview
[`jwt`](https://rubygems.org/gems/jwt) is a pure ruby implementation of the RFC 7519 OAuth JSON Web Token (JWT) standard.

Affected versions of the package are vulnerable to Timing Attacks due to time-variable comparison of signatures. A malicious user can guess a valid signature one char at a time by considering the time it takes a signature validation to fail.

For more information on Timing Attacks, see our [blog](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/)

## Remediation
Upgrade `jwt` to version 0.1.6 or higher.

## References
- [Github PR](https://github.com/jwt/ruby-jwt/pull/15)
- [Github Commit](https://github.com/jwt/ruby-jwt/commit/d94776ea3d38eb8860af35b63158c951d6fd32c4)
