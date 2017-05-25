## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks involving assignment on `constructor` properties.

## Remediation
Upgrade `angular` to version 1.4.10 or higher.

## References
- [Github PR](https://github.com/angular/angular.js/pull/13417)
- [Github Commit](https://github.com/angular/angular.js/commit/5a674f3bb9d1118d11b333e3b966c01a571c09e6)
