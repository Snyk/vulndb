## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of the package are vulnerable to Arbitrary Code Injection. A malicious user can create a specially crafted site which will be loaded in the `preload` script and would run in the main JavaScript context.

## Remediation
Upgrade `electron` to version 1.4.15 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/8348)
- [Github Commit](https://github.com/electron/electron/commit/feac8685f41fabbdce6c659db0a9be971e33c291)
