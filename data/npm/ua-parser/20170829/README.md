## Overview
[`ua-parser`](https://www.npmjs.com/package/ua-parser) is A port of Browserscope's user agent parser.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a Regex string and cause the service to hang for a large periods of time.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
There is no fix version for `ua-parser`.

## References
- [Nodesecurity](https://nodesecurity.io/advisories/316)
