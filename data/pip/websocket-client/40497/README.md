## Overview
[`websocket-client`](https://pypi.python.org/pypi/websocket_client) is a WebSocket client for python.

Affected versions of this package are vulnerable to Timing Attacks due to not comparing the HMAC hashes in constant time. A malicious user could guess the valid HMAC hash during the comparison time with an algorithm.

## References
- [GitHub Issue](https://github.com/websocket-client/websocket-client/issues/209)
- [GitHub PR](https://github.com/websocket-client/websocket-client/pull/211)
- [GitHub Commit](https://github.com/websocket-client/websocket-client/commit/896e7c7317def65f7f8fb27a3eed807f2e1e5386)
