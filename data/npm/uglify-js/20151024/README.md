## Overview
The `parse()` function in the [`uglify-js`](https://www.npmjs.com/package/uglify-js) package prior to version 2.6.0 is vulnerable to regular expression denial of service (ReDoS) attacks when long inputs of certain patterns are processed.

## Details
"The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time." [1](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)

## Remediation
Upgrade to version 2.6.0 or greater. 
If a direct dependency update is not possible, use `snyk wizard` to patch this vulnerability.

## References

- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
