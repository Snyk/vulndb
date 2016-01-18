## Overview
The [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) vulnerability exists `utc-millisec` validator of `is-my-json-valid` package, affecting version 2.12.3 and below.

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)

## References
- https://nodesecurity.io/advisories/76
- https://github.com/mafintosh/is-my-json-valid/commit/eca4beb21e61877d76fdf6bea771f72f39544d9b
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS


