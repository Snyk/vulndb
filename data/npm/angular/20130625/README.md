## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Arbitrary Script Injection due to improper sanitization of the `$event` object passed to the native constructor functions. That isn't protected by the fast paths in `$parse`.

## Remediation
Upgrade `angular` to version 1.1.5 or higher.

## References
-[GitHub Commit](https://github.com/angular/angular.js/commit/5349b20097dc5cdff0216ee219ac5f6e6ef8c219)
