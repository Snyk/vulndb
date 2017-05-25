## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Protection Bypass via `ng-attr-action` and `ng-attr-srcdoc` allowing binding to Javascript.
The fix was to require bindings to `form[action]` to be `$sce.RESOURCE_URL` and bindings to `iframe[srcdoc]` to be `$sce.HTML`

## Remediation
Upgrade `angular` to version 1.2.2 or higher.

## References
- [AngularJS Wiki](https://code.google.com/archive/p/mustache-security/wikis/AngularJS.wiki#The_State_of_AngularJS_1.2.x)
- [GitHub PR](https://github.com/angular/angular.js/pull/4933)
- [GitHub Issue](https://github.com/angular/angular.js/issues/4927)
