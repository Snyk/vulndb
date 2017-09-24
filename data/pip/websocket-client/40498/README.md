## Overview
[`websocket_client`](https://pypi.python.org/pypi/websocket_client) is a WebSocket client for python.

Affected versions of this package are vulnerable to Insecure Randomness due to the using the `uuid.uuid4()` function which can produce predictable values and should not be used in security-sensitive context.

## References
- [GitHub Issue](https://github.com/websocket-client/websocket-client/issues/210)
- [GitHub PR](https://github.com/websocket-client/websocket-client/pull/211)
- [GitHub Commit](https://github.com/websocket-client/websocket-client/commit/896e7c7317def65f7f8fb27a3eed807f2e1e5386)
