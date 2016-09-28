## Overview
[`moment`](https://www.npmjs.com/package/moment) is a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

An attacker can provide a long value to the `duration` function, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the event loop and preventing it from processing other requests and making the server unavailable (a Denial of Service attack).

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)

## Remediation
Upgrade `moment` to version `2.11.2` or greater.

## References
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/moment/moment/commit/52a807b961ead925be11ff5e632c8f7325a9ce36
- https://github.com/moment/moment/issues/2936
