## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via the SVG `<use>` element.

## Details
The `<use>` element can reference external SVG's (same origin) and can include `xlink:href` javascript urls or foreign object that can execute XSS. The change disallows `<use>` elements in sanitized SVG markup.

An example of a malicious SVG document would be:

SVG to sanitize:
```html
<svg><use xlink:href="test.svg#xss" /></svg>
```
External SVG file (test.svg):
```html
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg" width="100"
   height="100"
   id="xss">
<a xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="javascript:alert(1)">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</a>
</svg>
```

Here the SVG to sanitize loads in the `test.svg` file via the `<use>` element. The sanitizer is not able to parse this file, which contains malicious executable mark-up.
This can only be taken advantage of if the external file is available via the
same origin restrictions in place.

## Remediation
Upgrade `angular` to version 1.5.0-rc.0 or higher.

## References
- [Github PR](https://github.com/angular/angular.js/pull/13453)
- [Github Commit](https://github.com/angular/angular.js/commit/7a668cdd7d08a7016883eb3c671cbcd586223ae8)
