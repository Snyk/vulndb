## Overview
Swagger is a standardized library for documenting API endpoints and their parameters.  Swagger uses a JSON document to organize API endpoint parameter data.

Swagger-ui contains a cross site scripting (XSS) vulnerability in the key names for the following object path in the JSON document:
```
 .definitions.<USER_DEFINED>.properties.<INJECTABLE_KEY_NAME>
```
Supplying a key name with script tags causes arbitrary code execution.  In addition it is possible to load the arbitrary JSON files remotely via the `URL` query-string parameter.

This advisory is being disclosed before a public patched release is available because of a public Github issue documenting the vulnerability.

Source: _Node Security Project_

## Remediation
Our primary recommendation is to host swagger documentation on a separate domain distinct from the application domain.  Also, we recommend implementing a content security policy (CSP) that restricts the domains from which JSON files can be requested in order to avoid loading malicious JSON docs via the `URL` query string parameter.

## References
- https://github.com/swagger-api/swagger-ui/issues/1865
- https://en.wikipedia.org/wiki/Content_Security_Policy

