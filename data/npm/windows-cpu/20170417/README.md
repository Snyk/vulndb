## Overview
[`windows-cpu`](https://www.npmjs.com/package/windows-cpu) is a CPU monitoring utility for windows.

Affected versions of this package are vulnerable to Arbitrary Command Execution via the `findLoad` method, which passes a user-inputed string to the shell without validation.

Proof of Concept:
This code will open the built-in calculator program.
```js
var win = require('windows-cpu');
wind.findLoad('foo & calc.exe');
```

## Remediation
There is no fix version for `windows-cpu`.

## References
- [Vulnerable Code](https://github.com/KyleRoss/windows-cpu/blob/master/index.js#L81)
