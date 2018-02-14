## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework that lets you write cross-platform desktop applications using JavaScript, HTML and CSS. 

Electron apps running on Windows that register themselves as the default handler for a protocol, like myapp://, are vulnerable.

Such apps can be affected regardless of how the protocol is registered, e.g. using native code, the Windows registry, or Electron's app.setAsDefaultProtocolClient API.

**Note:** MacOS and Linux are not affected by this vulnerability.

## Remediation
Upgrade `electron` to version 1.6.16 or higher.

## References
- [Electron Vulnerability Advisory](https://electronjs.org/blog/protocol-handler-fix)
