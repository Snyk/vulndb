## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Arbitrary Code Execution. `$parse` allowed arbitrary code execution via Angular expressions under some very specific conditions. The only applications affected by these vulnerabilities are those that match all of the following conditions:
- Application mixes server-side and client-side templating
- The server-side templating contains XSS vulnerabilities
- The vulnerabilities in the server-side templating are being guarded by server-side XSS filters or on the client-side via CSP
- The server-side XSS vulnerabilities can be used to augment the client-side template processed by Angular
**Applications not meeting all of the conditions are not vulnerable.**

## Remediation
Upgrade `angular` to version 1.3.0 or higher.

## References
- [Angular Changelog](https://github.com/angular/angular.js/blob/b3b5015cb7919708ce179dc3d6f0d7d7f43ef621/CHANGELOG.md#130-beta14-harmonious-cacophonies-2014-06-30)
- [GitHub Commit #1](https://github.com/angular/angular.js/commit/528be29d1662122a34e204dd607e1c0bd9c16bbc)
- [GitHub Commit #2](https://github.com/angular/angular.js/commit/48fa3aadd546036c7e69f71046f659ab1de244c6)
- [GitHub Commit #3](https://github.com/angular/angular.js/commit/77ada4c82d6b8fc6d977c26f3cdb48c2f5fbe5a5)
