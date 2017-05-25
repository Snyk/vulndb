## Overview
[`org.bitbucket.b_c:jose4j`](https://bitbucket.org/b_c/jose4j/overview) is a robust and easy to use open source implementation of JSON Web Token (JWT) and the JOSE specification suite (JWS, JWE, and JWK).

Affected versions of the package are vulnerable to Elliptic Curve Key Disclosure.

A JSON Web Token (JWT) defines a container that transports data between two parties. When a JWT is signed with a private key by one of the parties, it's known as a JSON Web Signature (JWS).

The "JWK" (JSON Web Key) is a JSON based open standard used for creating access tokens. JWK's `Header Parameter` allows it to include the public key that corresponds to the key used to sign the JWS. If the Header Parameter includes this public key, an attacker could then use it to generate a private key / public key pair, send the public key together with the signature and the signature will be valid.

This vulnerability is related to [npm:node-jose:20170313](https://snyk.io/vuln/npm:node-jose:20170313) and [SNYK-JAVA-COMNIMBUSDS-30205](https://snyk.io/vuln/SNYK-JAVA-COMNIMBUSDS-30205)

## Remediation
Upgrade `org.bitbucket.b_c:jose4j` to version 0.5.5 or higher.

## References
- [Antonio Sanso Blog](http://blog.intothesymmetry.com/2017/03/critical-vulnerability-in-json-web.html)
- [Quan Nguyan Lecture](https://www.cs.bris.ac.uk/Research/CryptographySecurity/RWC/2017/nguyen.quan.pdf)
- [PoC](https://gist.github.com/asanso/350e3ce993e44d0509c6023aa77fc6af)
- [Github Commit](https://bitbucket.org/b_c/jose4j/commits/0517896170af8d5c057407c70a7b08dae454829e)
