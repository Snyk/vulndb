## Overview
[`angular`](https://www.npmjs.com/package/angular) is an open-source JavaScript framework, maintained by Google, that assists with running single-page applications with the goal of making development and testing easier by augmenting browser-based applications with model–view–controller (MVC) capability.
Affected versions of the package are vulnerable to Unsafe Object Deserialization.

## Details
The exploitable code:
```js
hasOwnProperty.constructor.prototype.valueOf = valueOf.call;
    ["a", "alert(1)"].sort(hasOwnProperty.constructor);
```

The exploit:
- 1. `Array.sort` takes a comparison function and passes it 2 parameters to compare.
  2. It then calls `.valueOf()` if the result is not a primitive.
- The `Function` object conveniently accepts two string arguments so so it can be used to construct a function.  However, this doesn't do much unless it can be executed.
- The `valueOf` function on `Function.prototype` was set to `Function.prototype.call`. This causes the function constructed to be executed when sort calls `.valueOf()` on the result of the comparison.

## Remediation
Upgrade `angular` to version 1.2.24 or higher.

## References
- [Github Commit](https://github.com/angular/angular.js/commit/b39e1d47b9a1b39a9fe34c847a81f589fba522f8)
