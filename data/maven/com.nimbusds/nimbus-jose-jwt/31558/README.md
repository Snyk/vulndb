## Overview
[`com.nimbusds:nimbus-jose-jwt`](https://nimbusds.com) is a Java library for Javascript Object Signing and Encryption (JOSE) and JSON Web Tokens (JWT).

Affected versions of the package are vulnerable to an Invalid Elliptic Curve Attack.

Nimbus JOSE+JWT before 4.36 proceeds with ECKey construction without ensuring that the public `x` and `y` coordinates are on the specified curve, which allows attackers to conduct an Invalid Curve Attack in environments where the JCE provider lacks the applicable curve validation.

## Remediation
Upgrade `com.nimbusds:nimbus-jose-jwt` to version 4.36 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12974)
- [Bitbucket Issue](https://bitbucket.org/connect2id/nimbus-jose-jwt/issues/217/explicit-check-for-ec-public-key-on-curve)
- [Bitbucket Commit](https://bitbucket.org/connect2id/nimbus-jose-jwt/commits/f3a7a801f0c6b078899fed9226368eb7b44e2b2f)
