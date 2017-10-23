## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of the package are vulnerable to Denial of Service (DoS). Valid frame names passed into `window.open` would throw errors and cause the service to crash.

## Remediation
Upgrade `electron` to version 1.6.8 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/9287)
- [Github Commit](https://github.com/electron/electron/commit/0aa53f4af7d13ea4c516999605b5d644a48a8f81)
