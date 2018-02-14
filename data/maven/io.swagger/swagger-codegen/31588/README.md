## Overview
[`io.swagger:swagger-codegen`](https://swagger.io) is a simple yet powerful representation of your RESTful API.

Affected versions of this package are vulnerable to Arbitrary Code Execution via the yaml parsing functionality. When a maliciously crafted yaml Open-API specification is parsed, it is possible to execute  arbitrary code on the hosting server. This in particular, affects the 'generate' and 'validate' command in swagger-codegen (<= 2.2.2) and can lead to arbitrary code being executed when these commands are used on a well-crafted yaml specification.

## Remediation
Upgrade `io.swagger:swagger-codegen` to version 2.2.3 or higher.

## References
- [GitHub PR](https://github.com/swagger-api/swagger-parser/pull/481)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000207)
