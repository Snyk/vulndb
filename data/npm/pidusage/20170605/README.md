## Overview
[`pidusage`](https://www.npmjs.com/package/pidusage) is a package for Cross-platform process cpu % and memory usage of a PID.
Affected versions of the package are vulnerable to Arbitrary Command Injection. It passes user input to `child_process.exec` without sanitization, which causes a command injection vulnerability in the `ps` function due to never casting the PID to an integer.

PoC:
```js
var pid = require('pidusage');
pid.stat('1 && /usr/local/bin/python');
```

## Remediation
Upgrade `pidusage` to version 1.1.5 or higher.

## References
- [GitHub Commit](https://github.com/soyuka/pidusage/commit/b70eca15f7ca7f1b82a15f8a5d4bb48737f5a89d)
