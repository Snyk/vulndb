## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.

Affected versions of the package are vulnerable to CSP Bypass.
Extension URIs (`resource://...`) bypass Content-Security-Policy in Chrome and Firefox and can always be loaded. Now if a site already has a XSS bug, and uses CSP to protect itself, but the user has an extension installed that uses Angular, an attacker can load Angular from the extension, and Angular's auto-bootstrapping can be used to bypass the victim site's CSP protection.

## Remediation
Upgrade `angular` to version 1.5.9 or higher.

## References
- [GitHub Pr](https://github.com/angular/angular.js/pull/15346)
- [GitHub Commit](https://github.com/angular/angular.js/commit/0ff10e1b56c6b7c4ac465e35c96a5886e294bac5)
