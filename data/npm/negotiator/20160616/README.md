## Overview
[`negotiator`](https://npmjs.org/package/negotiator) is an HTTP content negotiator for Node.js. Versions prior to `0.6.1` are vulnerable to [Regular expression Denial of Service (ReDoS)](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) attack when parsing "Accept-Language" http header.

An attacker can provide a long value in the Accept-Language header, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the thread and preventing it from processing other requests. By repeatedly sending multiple such requests, the attacker can make the server unavailable (a Denial of Service attack).

## Details
The Regular expression Denial of Service (ReDoS) is a Denial of Service attack, that exploits the fact that most Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size). An attacker can then cause a program using a Regular Expression to enter these extreme situations and then hang for a very long time. [1]

## Remediation
Upgrade `negotiator` to to version `0.6.1` or greater.

## References
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
- https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c
