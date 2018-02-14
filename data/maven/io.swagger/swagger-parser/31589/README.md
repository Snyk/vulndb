## Overview
[`io.swagger:swagger-codegen`](https://swagger.io) is a simple yet powerful representation of your RESTful API.

Affected versions of this package are vulnerable to Arbitrary Code Execution via the yaml parsing functionality. When a maliciously crafted yaml Open-API specification is parsed, it is possible to execute  arbitrary code on the hosting server.

## Remediation
Upgrade `io.swagger:swagger-parser` to version 1.0.31 or higher.

## References
- [GitHub PR](https://github.com/swagger-api/swagger-parser/pull/481)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000207)
