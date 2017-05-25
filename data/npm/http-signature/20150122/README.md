## Overview
[`http-signature`](https://www.npmjs.com/package/http-signature) is a reference implementation of Joyent's HTTP Signature scheme.

Affected versions of the package are vulnerable to Timing Attacks due to time-variable comparison of signatures. A malicious user can guess a valid signature one char at a time by considering the time it takes a signature validation to fail.

## Remediation
Upgrade `http-signature` to version 1.0.0 or higher.

## References
- [Github PR](https://github.com/joyent/node-http-signature/pull/36)
- [Github Commit](https://github.com/joyent/node-http-signature/commit/78ab1da232f31f695f5c362d863593a143aa8b56)
