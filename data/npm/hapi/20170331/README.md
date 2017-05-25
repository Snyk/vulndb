## Overview
[`hapi`](https://www.npmjs.com/package/hapi) is an HTTP Server framework.
Affected versions of the package are vulnerable to Denial of Service (DoS). A client can send a malformed `accept-encoding` header to the server, invoking an uncaught exception and may cause the server to crash or hang for long periods of time.

## Remediation
Upgrade `hapi` to version 16.1.1 or higher.

## References
- [GitHub Issue](https://github.com/hapijs/hapi/issues/3466)
- [GitHub Commit](https://github.com/hapijs/hapi/commit/770cc7bad15122f796d938738b7c05b66d2f4b7f)
