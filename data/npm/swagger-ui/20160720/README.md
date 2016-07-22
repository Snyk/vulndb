## Overview
Swagger is a standardized library for documenting API endpoints and their parameters.  Swagger uses a JSON document to organize API endpoint parameter data.

Swagger-UI version 2.1.4 contains a cross site scripting (XSS) vulnerability in the `consumes` and `produces` parameters of the swagger json document for a given API.  A maliciously crafted swagger JSON doc can be loaded via the URL query-string parameter `url`.

To exploit the vulnerability, an attacker would convince a user to visit a malicious url crafted in the following format:
```
http://<USER_HOSTNAME>/swagger-ui/index.html?url=http://<MALICIOUS_HOSTNAME>/malicious-swagger-file.json
```

This issue is being disclosed before a public patched release is available due to the issue being made public in a Github issue.

Source: _Node Security Project_

## Remediation
Upgrade `swagger-ui` to version `2.1.5` or greater. 

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/docs/using-snyk#wizard) to patch this vulnerability.

## References
- https://github.com/swagger-api/swagger-ui/issues/1866
- https://github.com/swagger-api/swagger-ui/pull/1867

