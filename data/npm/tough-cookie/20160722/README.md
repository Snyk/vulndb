## Overview
[`tough-cookie`](https://www.npmjs.com/package/tough-cookie) package versions `0.9.7` through `2.2.2` are vulnerable to a [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) when long strings of semicolons in the `Set-Cookie` header, causes the event loop to block for excessive amounts of time.

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)

## Remediation
Upgrade `tough-cookie` to at version `2.3.0` or greater.

## References
- https://github.com/SalesforceEng/tough-cookie/commit/e4fc2e0f9ee1b7a818d68f0ac7ea696f377b1534
