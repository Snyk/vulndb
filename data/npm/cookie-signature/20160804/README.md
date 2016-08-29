## Overview
['cookie-signature'](https://www.npmjs.com/package/cookie-signature) is a library for signing cookies.

Versions before `1.0.4` of the library use the built-in string comparison mechanism, `===`, and not a time constant string comparison. As a result, the comparison will fail faster when the first characters in the token are incorrect. 
An attacker can use this difference to perform a timing attack, essentially allowing them to guess the secret one character at a time.

## Details
You can read more about timing attacks in Node.js on the Snyk blog: https://snyk.io/blog/node-js-timing-attack-ccc-ctf/

## Remediation
Upgrade to `1.0.4` or greater.

## References
- https://github.com/tj/node-cookie-signature/blob/master/History.md#104--2014-06-25
- https://github.com/tj/node-cookie-signature/commit/39791081692e9e14aa62855369e1c7f80fbfd50e
