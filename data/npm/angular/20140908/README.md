## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to unsanitized URIs in `ng-srcset`.

## Remediation
Upgrade `angular` to version 1.3.0-rc.4 or higher.

## References
- [Github PR](https://github.com/angular/angular.js/pull/8975)
- [Github Commit](https://github.com/angular/angular.js/commit/ab80cd90661396dbb1c94c5f4dd2d11ee8f6b6af)
