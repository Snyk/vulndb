## Overview

The [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) vulnerability exists in the `ms` package, affecting version 0.7.0 and below.

## Details

`ms` is a milliseconds conversion utility, used to convert a time period string (i.e. `"2 days"`, `"1h"`) into milliseconds integer.
The regular expression used by the function to parse the time is vulnerable to a denial of service attack, where extremely long strings passed to `ms()` can take a long time to process, subsequently blocking the event loop for that extended period.

"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)

## Remediation
Upgrade `ms` to version 0.7.1. 

If direct dependency upgrade is not possible, use [snyk wizard](https://snyk.io/docs/using-snyk#wizard) to patch this vulnerability.

## References

- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
