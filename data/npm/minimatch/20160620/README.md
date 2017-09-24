## Overview
[`minimatch`](https://www.npmjs.com/package/minimatch) is a minimalistic matching library used for converting glob expressions into JavaScript RegExp objects.
Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack.  Many Regular Expression implementations may reach edge cases that causes them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a Regex string and cause the service to hang for a large periods of time.

An attacker can provide a long value to the `minimatch` function, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the event loop and preventing it from processing other requests and making the server unavailable (a Denial of Service attack).

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `minimatch` to version `3.0.2` or greater.

## References
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955
