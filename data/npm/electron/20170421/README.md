## Overview
[`electron`](https://www.npmjs.com/package/electron) is a framework for creating native applications with web technologies like JavaScript, HTML, and CSS. It takes care of the hard parts so you can focus on the core of your application.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks. A new window opened from within a window that had javascript disabled, would have javascript enabled by default.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `electron` to version 1.6.8 or higher.

## References
- [Github PR](https://github.com/electron/electron/pull/9250)
- [Github Commit](https://github.com/electron/electron/commit/c9ec45d9d8b6f3fa82b5f47ab8a6f7f1cece436c)
