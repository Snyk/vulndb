## Overview
[`safe-eval`] is a version of `eval`, claiming to be safer.

Affected versions of this package are vulnerable to Sandbox Escaping.
User input is not sanitized before being passed on to the safeEval function.
A malicious user could access the object constructors, allowing access to the standard library, then escaping the sandbox.

Proof of Concept:
```
var safeEval = require('safe-eval');
safeEval("this.constructor.constructor('return process')().exit()");
```

## Remediation
There is no fix version for `safe-eval`.

## References
- [GitHub Issue #1](https://github.com/hacksparrow/safe-eval/issues/5)
- [GitHub Issue #2](https://github.com/patriksimek/vm2/issues/59)
