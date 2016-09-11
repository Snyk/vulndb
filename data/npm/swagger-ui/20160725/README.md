## Overview
`swagger-ui` supports receiving headers (e.g. Content-Type) from the Swagger-conforming API server, to be used when demonstrating use of the API using `curl`. Those headers are injected into the documentation as-is (not encoded), allowing a malicious API server to inject a script (XSS) into the swagger-ui front-end.

## Remediation
Upgrade `swagger-ui` to version `2.1.5` or newer.
If a direct dependency update is not possible, use snyk wizard to patch this vulnerability.

## References
- https://github.com/swagger-api/swagger-ui/issues/1863
