## Overview
[`json-schema`](https://rubygems.org/gems/json-schema) is Ruby JSON Schema Validator.

Affected versions of the package are vulnerable to  Man-in-the-middle (MitM) attacks due to attacks due to downloading gems over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Upgrade `json-schema` to version 2.3.0 or higher.

## References
- [Github PR](https://github.com/ruby-json-schema/json-schema/pull/111)
- [Github Commit](https://github.com/ruby-json-schema/json-schema/commit/0298b053c76c1a85a86547afe5914b7847f0e2b8)
