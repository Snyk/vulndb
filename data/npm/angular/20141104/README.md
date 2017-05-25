## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Arbitrary Command Injection due to the assignment functions accessing constructors functions, allowing attackers to execute their malicious code.

## Remediation
Upgrade `angular` to version 1.3.2 or higher.

## References
- [Github Commit](https://github.com/angular/angular.js/commit/e676d642f5feb8d3ba88944634afb479ba525c36)
- [Change log](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#132-cardiovasculatory-magnification-2014-11-07)
