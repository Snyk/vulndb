## Overview
[`fuseki`](https://www.npmjs.com/package/fuseki) is a server wrapper and management API for java fuseki.

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
Upgrade to version `1.0.1` or higher.

## References
- [Github Commit](https://github.com/bergos/fuseki/commit/154c0f12c468a8af33562dff12b1bb0e5b659df9)]
