## Overview
Swagger UI is a dependency-free collection of HTML, Javascript, and CSS assets that dynamically generate  documentation from a Swagger-compliant API.

A key part of this generation is the use of a JSON schema, which can be read locally or by providing a `url` parameter to the Swagger server (e.g. `http://swagger-server/swagger-ui/index.html?url=<schema-url>`).

The schema supports property fields, which are in turn included in the generated HTML without any HTML encoding, allowing an attacker to perform XSS by adding malicious scripts to their values.

## Remediation
Upgrade to version `2.2.1` or newer.

## References
- https://github.com/swagger-api/swagger-ui/issues/1865
- https://github.com/swagger-api/swagger-ui/releases/tag/v2.2.1
