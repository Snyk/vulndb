## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Mutation Cross-site Scripting (mXSS).

## Details
This error occurs when `$sanitize` sanitizer tries to check the input for possible mXSS payload and the verification errors due to the input mutating indefinitely. This could be a sign that the payload contains code exploiting an mXSS vulnerability in the browser.

mXSS attack exploit browser bugs that cause some browsers parse a certain html strings into DOM, which once serialized doesn't match the original input. These browser bugs can be exploited by attackers to create payload which looks harmless to sanitizers, but due to mutations caused by the browser are turned into dangerous code once processed after sanitization.

## Remediation
Upgrade `angular` to version 1.5.0-beta.2 or higher.

## References
- [Github PR](https://github.com/angular/angular.js/pull/12524)
- [Github Commit](https://github.com/angular/angular.js/commit/bc0d8c4eea9a34bff5e29dd492dcdd668251be40)
