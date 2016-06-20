## Overview
[`minimatch`](https://www.npmjs.com/package/minimatch) is a minimalistic matching library used for converting glob expressions into JavaScript RegExp objects.

An attacker can provide a long value to the `minimatch` function, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the event loop and preventing it from processing other requests and making the server unavailable (a Denial of Service attack).

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)

## Remediation
Upgrade `minimatch` to version `3.0.2` or greater.

## References
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955
