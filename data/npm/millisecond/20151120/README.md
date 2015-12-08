## Overview

[Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) vulnerability exists in `milliseconds` module, affecting version 0.1.1 and below.

`milliseconds`, the milliseconds conversion utility is used to convert times to milliseconds.
The regular expression used by the function to parse the time is vulnerable to denial of service attack, where extremely long strings that are passed to `milliseconds()` can take long time to process and as a result block the event loop for that period.

## Details

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1]

## Remediation
Upgrade to version 0.1.2.

## References
- https://nodesecurity.io/advisories/59
- [1] https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/unshiftio/millisecond/pull/4
