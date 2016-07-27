## Overview
By using a malicious server which returns script as the value of the Content-Type header, it is possible to execute arbitrary code using the demonstration capabilities of Swagger-UI.

Source: _Node Security Project_

## Remediation
Upgrade to `swagger-ui` version 2.1.5 or later.

If a direct dependency update is not possible, use snyk wizard to patch this vulnerability.

## References
* https://github.com/swagger-api/swagger-ui/issues/1863

