## Overview
[`ms`](https://www.npmjs.com/package/ms) is a tiny milisecond conversion utility.

Affected versions of this package are vulnerable to a Regular expression Denial of Service (ReDoS) attack when converting a time period string (i.e. `"2 days"`, `"1h"`) into milliseconds integer. A malicious user could pas extremely long strings to `ms()`, causing the server take a long time to process, subsequently blocking the event loop for that extended period.

## Details
The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

## Remediation
Upgrade `ms` to version 0.7.1.

If direct dependency upgrade is not possible, use [snyk wizard](https://snyk.io/docs/using-snyk#wizard) to patch this vulnerability.

## References
- [OWASP - ReDoS](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)
