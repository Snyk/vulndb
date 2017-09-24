## Overview
[`http-signature`](https://www.npmjs.com/package/http-signature) is a reference implementation of Joyent's HTTP Signature scheme.
Affected versions of the package are vulnerable to Timing Attacks due to time-variable comparison of signatures. il.

The library implemented a character to character comparison, similar to the built-in string comparison mechanism, `===`, and not a time constant string comparison. As a result, the comparison will fail faster when the first characters in the signature are incorrect.
An attacker can use this difference to perform a timing attack, essentially allowing them to guess the signature one character at a time.

You can read more about timing attacks in Node.js on the [Snyk blog](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/).

## Remediation
Upgrade `http-signature` to version 1.0.0 or higher.

## References
- [Github PR](https://github.com/joyent/node-http-signature/pull/36)
- [Github Commit](https://github.com/joyent/node-http-signature/commit/78ab1da232f31f695f5c362d863593a143aa8b56)
