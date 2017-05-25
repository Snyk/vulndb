## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to the `usemap` attribute not being blacklisted.


## Remediation
Upgrade `angular` to version 1.5.0-rc.2 or higher.

## References
- [Changelog](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#150-rc2-controller-requisition-2016-01-28)
- [GitHub PR](https://github.com/angular/angular.js/pull/13826)
- [GitHub Commit](https://github.com/angular/angular.js/commit/234053fc9ad90e0d05be7e8359c6af66be94c094)
