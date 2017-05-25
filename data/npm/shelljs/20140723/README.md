## Overview
[`shelljs`](https://www.npmjs.com/package/shelljs) is a portable Unix shell commands for Node.js.
It is possible to invoke commands from `shell.exec()` from external sources, allowing an attacker to inject arbitrary commands.  

## Remediation
There is no fix version for `shelljs`.

## References
- [Github Issue #1](https://github.com/shelljs/shelljs/issues/143)
- [Github Issue #2](https://github.com/shelljs/shelljs/issues/495)
- [Github PR](https://github.com/shelljs/shelljs/pull/524)
- [Github Commit](https://github.com/shelljs/shelljs/pull/524/commits/924c85d21f08683d80a98a89eaae8932be259768)
