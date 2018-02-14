## Overview
[`io.swagger:swagger-codegen`](https://swagger.io) is a simple yet powerful representation of your RESTful API.
Affected versions of this package are vulnerable to Arbitrary Code Execution via parameter injection. By leveraging this vulnerability, an attacker can inject arbitrary execution code embedded with a client or server generated automatically to interact with the definition of service.

## References
- [Scott Davis Blog](https://community.rapid7.com/community/infosec/blog/2016/06/23/r7-2016-06-remote-code-execution-via-swagger-parameter-injection-cve-2016-5641)
- [GitHub PR](https://github.com/swagger-api/swagger-codegen/pull/3201)
