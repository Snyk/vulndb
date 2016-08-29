## Overview
bleach 3.0 and earlier is vulnerable to [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) when certain types of input are passed into the sanitize function.

_Source: [Node Security Project] (https://nodesecurity.io/advisories/47)_

## Details
The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time. [1]

## References
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS

