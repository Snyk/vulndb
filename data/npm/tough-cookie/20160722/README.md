## Overview
[`tough-cookie`](https://www.npmjs.com/package/tough-cookie) Hawk is an HTTP authentication scheme using a message authentication code (MAC) algorithm to provide partial HTTP request cryptographic verification. 
Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack.  Many Regular Expression implementations may reach edge cases that causes them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

An attacker can provide a cookie, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the event loop and preventing it from processing other requests and making the server unavailable (a Denial of Service attack).

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `tough-cookie` to at version `2.3.0` or greater.

## References
- https://github.com/SalesforceEng/tough-cookie/commit/e4fc2e0f9ee1b7a818d68f0ac7ea696f377b1534
