## Overview
Swagger UI is a dependency-free collection of HTML, Javascript, and CSS assets that dynamically generate  documentation from a Swagger-compliant API.

A key part of this generation is the use of a JSON schema, which can be read locally or by providing a `url` parameter to the Swagger server (e.g. `http://swagger-server/swagger-ui/index.html?url=<schema-url>`).

The `produces` and `consumes` schema fields are written to the HTML without any HTML encoding, allowing an attacker to perform XSS by adding malicious scripts to their values.

## Remediation
Upgrade `swagger-ui` to version `2.1.5` or greater.

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/docs/using-snyk#wizard) to patch this vulnerability.

## References
- https://github.com/swagger-api/swagger-ui/issues/1866
- https://github.com/swagger-api/swagger-ui/pull/1867
