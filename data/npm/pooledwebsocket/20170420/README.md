## Overview
[`pooledwebsocket`](https://www.npmjs.com/package/pooledwebsocket) is a Pooled Web Socket server.
Affected versions of the package are vulnerable to Directory Traversal, which may allow access to sensitive files and data on the server. For example, requesting the following url `/..%2f..%2fetc/passwd` would result in `/etc/passwd` leak.

Thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability!

## Disclosure Timeline
- April 24th, 2017 - Disclosed to package owner
- April 24th, 2017 - Issue acknowledged by package owner.
- April 24th, 2017 - Issue fixed and version `0.0.18` released.

## Remediation
Upgrade `pooledwebsocket` to version 0.0.18 or higher.

## References
- [Github Commit](https://github.com/Eeems/PooledWebSocket/commit/7b3b4e5c6be6d8a964296fa3c50e38dc07e9701d)
