## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of the package are vulnerable to Uninitialized Memory Exposure. The [Buffer](https://nodejs.org/api/buffer.html) class in Node.js is available as global, even if the `nodeintegration` attribute is not added. This could result in concatenation of uninitialized memory to the buffer collection.

This is a result of unobstructed use of the `Buffer` constructor, whose [insecure default constructor increases the odds of memory leakage](https://snyk.io/blog/exploiting-buffer/).

## Remediation
Upgrade `electron` to version 1.6.1 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/8605)
- [Github Issue](https://github.com/electron/electron/issues/7081)
- [Github Commit](https://github.com/electron/electron/commit/624e44dd6fb585cc9acd4a0b56c0568c789b5bd1)
- [Github Release Notes](https://github.com/electron/electron/releases/tag/v1.6.1)
