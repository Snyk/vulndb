## Overview
[`fernet`](https://www.npmjs.com/package/fernet) is a Javascript implementation of [Fernet symmetric encryption](https://github.com/kr/fernet-spec).
Affected versions of the package are vulnerable to a timing attack.

The library implemented a character to character comparison, similar to the built-in string comparison mechanism, `===`, and not a time constant string comparison. As a result, the comparison will fail faster when the first characters in the HMAC are incorrect.
An attacker can use this difference to perform a timing attack, essentially allowing them to guess the HMAC one character at a time.

You can read more about timing attacks in Node.js on the [Snyk blog](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/).

## Remediation
Upgrade `fernet` to version 0.1.0 or higher.

## References
- [Github PR](https://github.com/csquared/fernet.js/pull/7)
- [Github Commit](https://github.com/csquared/fernet.js/commit/29c456543c69604289931b4e8979ec17bbeeff33)
