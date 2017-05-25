## Overview
[`node-jose`](https://www.npmjs.com/package/node-jose) is A JavaScript implementation of the JSON Object Signing and Encryption (JOSE) for current web browsers and node.js-based servers.

Affected versions of the package are vulnerable to Elliptic Curve Key Disclosure.

A JSON Web Token (JWT) defines a container that transports data between two parties. When a JWT is signed with a private key by one of the parties, it's known as a JSON Web Signature (JWS).

The "JWK" (JSON Web Key) is a JSON based open standard used for creating access tokens. JWK's `Header Parameter` allows it to include the public key that corresponds to the key used to sign the JWS. If the Header Parameter includes this public key, an attacker could then use it to generate a private key / public key pair, send the public key together with the signature and the signature will be valid.

This vulnerability is related to [SNYK-JAVA-ORGBITBUCKETBC-30206](https://snyk.io/vuln/SNYK-JAVA-ORGBITBUCKETBC-30206) and [SNYK-JAVA-COMNIMBUSDS-30205](https://snyk.io/vuln/SNYK-JAVA-COMNIMBUSDS-30205)

## Remediation
Upgrade `node-jose` to version 0.9.3 or higher.

## References
- [Antonio Sanso Blog](http://blog.intothesymmetry.com/2017/03/critical-vulnerability-in-json-web.html)
- [Quan Nguyan Lecture](https://www.cs.bris.ac.uk/Research/CryptographySecurity/RWC/2017/nguyen.quan.pdf)
- [PoC](https://gist.github.com/asanso/fa25685348051ef6a28d49aa0f27a4ae)
- [GitHub PR](https://github.com/cisco/node-jose/pull/88)
- [GitHub Commit](https://github.com/cisco/node-jose/pull/88/commits/a994629b4b389dd38dba013cdd4753dad854524f)
