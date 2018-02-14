## Overview
Affected versions of [`gree/jose`](https://packagist.org/packages/gree/jose) are vulnerable to Timing Attack.

The library implemented a character to character comparison, similar to the built-in string comparison mechanism, `===`, and not a time constant string comparison. As a result, the comparison will fail faster when the first characters in the encryption key are incorrect.
An attacker can use this difference to perform a timing attack, essentially allowing them to guess the encryption key one character at a time.

You can read more about timing attacks in Node.js on the [Snyk blog](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/).

## Remediation
Upgrade `gree/jose` to version 2.2.1 or higher.

## References
- [Auth0 Blog](https://auth0.com/blog/2015/03/31/critical-vulnerabilities-in-json-web-token-libraries/)
- [GitHub Commit](https://github.com/nov/jose-php/commit/f03b986b4439e20b0fd635109b48afe96cf0099b)
