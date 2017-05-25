## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS).

## Details
Concatenating expressions makes it hard to reason about whether some combination of concatenated values are unsafe to use and could easily lead to XSS. By requiring that a single expression be used for ``*[src/ng-src]`` such as `iframe[src]`, `object[src]`, etc. (but not `img[src/ng-src]` since that value is sanitized), it is ensured that the value that's used is assigned or constructed by some JS code somewhere that is more testable or make it obvious that you bound the value to some user controlled value. This helps reduce the load when auditing for XSS issues.

To migrate your code, follow the example below:

Before:
```js
JS:
scope.baseUrl = 'page';
scope.a = 1;
scope.b = 2;
```
```html
HTML:
<!-- Are a and b properly escaped here? Is baseUrl
 controlled by user? -->
<iframe src="{{baseUrl}}?a={{a}&b={{b}}">
```

After:
```js
JS:
var baseUrl = "page";
scope.getIframeSrc = function() {
  // There are obviously better ways to do this.  The
  // key point is that one will think about this and do
  // it the right way.
  var qs = ["a", "b"].map(function(value, name) {
  return encodeURIComponent(name) + "=" +
 encodeURIComponent(value);
}).join("&");
  // baseUrl isn't on scope so it isn't bound to a user
  // controlled value.
  return baseUrl + "?" + qs;
}
```
``` html
HTML: <iframe src="{{getIframeSrc()}}">Before:
```

## Remediation
Upgrade `angular` to version 1.2.0 or higher.

## References
- [GitHub PR](https://github.com/angular/angular.js/pull/3030)
- [GitHub Commit](https://github.com/angular/angular.js/commit/38deedd6e3d806eb8262bb43f26d47245f6c2739)
