## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of the package are vulnerable to Denial of Service (DoS). Certain built-in window APIs like `alert`, `confirm`, `open`, `history.go`, and `postMessage` would throw errors in the main process instead of the renderer processes when the arguments were invalid, causing the service to crash.

## Remediation
Upgrade `electron` to version 1.6.8 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/9252)
- [Github Commit](https://github.com/electron/electron/commit/2e223288d23ba9fb95d08d0d006e9a7ec9a7f583)
