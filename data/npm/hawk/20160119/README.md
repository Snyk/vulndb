## Overview
A [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) vulnerability exists in `hawk` package, affecting version 4.1.0 and below.

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)

## References
- https://github.com/hueniverse/hawk/issues/168
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
