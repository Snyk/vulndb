## Overview
[`brace-expansion`](https://www.npmjs.com/package/brace-expansion) is a package that performs brace expansion as known from sh/bash.
Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack.  Many Regular Expression implementations may reach edge cases that causes them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a Regex string and cause the service to hang for a large periods of time.

An attacker can provide a long value to the `expand` function, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the event loop and preventing it from processing other requests and making the server unavailable (a Denial of Service attack).
Running:
```js
const expand = require('brace-expansion');
expand('{,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n}')
```
Will hang for long periods of time.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `brace-expansion` to version 1.1.7 or higher.

## References
- [GitHub PR](https://github.com/juliangruber/brace-expansion/pull/35)
- [GitHub Issue](https://github.com/juliangruber/brace-expansion/issues/33)
- [GitHub Commit](https://github.com/juliangruber/brace-expansion/pull/35/commits/b13381281cead487cbdbfd6a69fb097ea5e456c3)
