## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of the package are vulnerable to Denial of Service (DoS) due to an uncaught error when handling the `window.alert`, `window.close`, and `window.confirm` functions, causing the service to crash.

## Remediation
Upgrade `electron` to version 1.3.13, 1.4.11 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/8110)
- [Github Issue](https://github.com/electron/electron/issues/7351)
- [Github Commit #1](https://github.com/electron/electron/commit/3fe9762082f6cfdc071053995a41af5bfcca6057)
- [Github Commit #2](https://github.com/electron/electron/commit/a9d4d9ad85f8969dbc532dc9781645c01da4bdbc)
- [Github Release Notes 1.4.11](https://github.com/electron/electron/releases/tag/v1.4.11)
- [Github Release Notes 1.3.13](https://github.com/electron/electron/releases/tag/v1.3.13)
