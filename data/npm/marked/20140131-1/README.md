## Overview

Marked 0.3.3 and earlier is vulnerable to regular expression denial of service (ReDoS) when certain types of input are passed in to be parsed.

_Source: [Node Security Project](https://nodesecurity.io/advisories/23)_

## Details

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1]

Marked's catastrophic backtracking issue for the `em` inline rule has now been patched in 0.3.4.

## Remediation

Ugrade to marked v0.3.4 or later.

## References
- https://nodesecurity.io/advisories/23
- [1] https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/chjj/marked/issues/497
