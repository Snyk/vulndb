## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of the package are vulnerable to Denial of Service (DoS). When specifying `webPreferences` in the `features` parameter to the `window.open` function, it would throw an error in the main process and cause the service to crash.

## Remediation
Upgrade `electron` to version 1.6.8 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/9289)
- [Github Commit](https://github.com/electron/electron/commit/8460a580b98f26e8a59ad421c33c87aec20c6a82)
