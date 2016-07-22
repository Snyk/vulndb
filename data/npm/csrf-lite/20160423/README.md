## Overview
`csrf-lite` is a cross-site request forgery protection library for framework-less node sites.

While the CSRF protection itself works well and increases security, the library uses the built-in string comparison mechanism, `===`, and not a time constant string comparison. As a result, the comparison will fail faster when the first characters in the token are incorrect. 
An attacker can use this difference to perform a timing attack, essentially allowing them to guess the CSRF token one character at a time.

You can read more about timing attacks in Node.js on the Snyk blog: https://snyk.io/blog/node-js-timing-attack-ccc-ctf/

## Remediation
Update to version `0.1.2` or higher.

## References
- https://github.com/isaacs/csrf-lite/pull/1
- https://snyk.io/blog/node-js-timing-attack-ccc-ctf/
