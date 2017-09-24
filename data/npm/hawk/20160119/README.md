## Overview
[`hawk`](https://www.npmjs.com/package/hawk) Hawk is an HTTP authentication scheme using a message authentication code (MAC) algorithm to provide partial HTTP request cryptographic verification. 
Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack.  Many Regular Expression implementations may reach edge cases that causes them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a Regex string and cause the service to hang for a large periods of time.

An attacker can provide a long url, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the event loop and preventing it from processing other requests and making the server unavailable (a Denial of Service attack).

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## References
- https://github.com/hueniverse/hawk/issues/168
- https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
