## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.

## Details
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks.

DOM event handlers await events to occur (e.g. onclick, onkeypress, etc) and execute arbitrary Javascript code in accordance to the event. By default, interpolations inside DOM event handlers are disallowed. Using an interpolation for such handlers means that the interpolated value is a JS string being evaluated. Storing or generating such strings is error prone and likely leads to a Cross-site Scripting (XSS) vulnerability if you're not careful. On the other hand, ng-click and such event handlers evaluate Angular expressions that are a lot safer (e.g. No direct access to global objects - only scope), cleaner and harder to exploit.

To migrate the code follow the example below:
Before:
```js
JS:   scope.foo = 'alert(1)';
```
```html
HTML: <div onclick="{{foo}}">
```

After:
```js
JS:   scope.foo = function() { alert(1); }
```
```html
HTML: <div ng-click="foo()">
```

## Remediation
Upgrade `angular` to version 1.2.0 or higher.

## References
- [Github Commit](https://github.com/angular/angular.js/commit/39841f2ec9b17b3b2920fd1eb548d444251f4f56)
