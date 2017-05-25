## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Arbitrary Script Injection.

## Details
`link[href]` attributes were not protected via `$sce`, which prevents interpolated values that fail the `RESOURCE_URL` context tests from being used in interpolation.
For example if the application is running at `https://docs.angularjs.org` then the following will fail:
```html
<link href="{{ 'http://mydomain.org/unsafe.css' }}" rel="stylesheet">
```
By default, `RESOURCE_URL` safe URLs are only allowed from the same domain and protocol
as the application document.

## Remediation
Upgrade `angular` to version 1.2.30 or higher.

## References
- [Github Changelog](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#1230-patronal-resurrection-2016-07-21)
- [Github PR](https://github.com/angular/angular.js/pull/14687)
- [Github Commit](https://github.com/angular/angular.js/commit/f35f334bd3197585bdf034f4b6d9ffa3122dac62)
