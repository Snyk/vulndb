## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to no proper sanitization of `xlink:href` attributes.

## Remediation
Upgrade `angular` to version 1.5.0-beta.0 or higher.

## References
- [GitHub PR](https://github.com/angular/angular.js/pull/12524)
- [GitHub Commit](https://github.com/angular/angular.js/commit/f33ce173c90736e349cf594df717ae3ee41e0f7a)
