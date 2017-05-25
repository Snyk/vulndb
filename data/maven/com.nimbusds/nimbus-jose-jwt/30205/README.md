## Overview
[`com.nimbusds:nimbus-jose-jwt`](https://bitbucket.org/connect2id/nimbus-jose-jwt/overview) is a Java library for Javascript Object Signing and Encryption (JOSE) and JSON Web Tokens (JWT).

Affected versions of the package are vulnerable to Elliptic Curve Key Disclosure.

A JSON Web Token (JWT) defines a container that transports data between two parties. When a JWT is signed with a private key by one of the parties, it's known as a JSON Web Signature (JWS).

The "JWK" (JSON Web Key) is a JSON based open standard used for creating access tokens. JWK's `Header Parameter` allows it to include the public key that corresponds to the key used to sign the JWS. If the Header Parameter includes this public key, an attacker could then use it to generate a private key / public key pair, send the public key together with the signature and the signature will be valid.

This vulnerability is related to [SNYK-JAVA-ORGBITBUCKETBC-30206](https://snyk.io/vuln/) and [npm:node-jose:20170313](https://snyk.io/vuln/npm:node-jose:20170313)

## Remediation
Upgrade `com.nimbusds:nimbus-jose-jwt` to version 4.34.2 or higher.

## References
- [Antonio Sanso Blog](http://blog.intothesymmetry.com/2017/03/critical-vulnerability-in-json-web.html)
- [Quan Nguyan Lecture](https://www.cs.bris.ac.uk/Research/CryptographySecurity/RWC/2017/nguyen.quan.pdf)
- [PoC](https://gist.github.com/asanso/5b8cabb862e6f730e00a97d8565dc325)
- [GitHub Issue](https://bitbucket.org/connect2id/nimbus-jose-jwt/issues/210/ecdh-curve-check)
- [GitHub Commit](https://bitbucket.org/connect2id/nimbus-jose-jwt/commits/e82a6ab)
