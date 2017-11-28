## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.

Affected versions of the package are vulnerable to JSONP Callbacks attacks.   

`JSONP` (JSON with padding) is a method used to request data from a server residing in a different domain than the client.

Any url could perform JSONP requests, allowing full access to the browser and the JavaScript context. This can lead to Cross-site Scripting.

## Remediation
Upgrade `angular` to version 1.6.1 or higher.

## References
- [GitHub Issue](https://github.com/angular/angular.js/issues/11328)
- [GitHub PR 1](https://github.com/angular/angular.js/pull/15161)
- [GitHub PR 2](https://github.com/angular/angular.js/pull/15143)
