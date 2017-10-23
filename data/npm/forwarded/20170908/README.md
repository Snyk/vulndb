## Overview
[`forwarded`](https://www.npmjs.com/package/forwarded) is Parse HTTP X-Forwarded-For header.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks. A Regular Expression (`/ *, */`) was used for parsing HTTP headers and take about 2 seconds matching time for 50k characters.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `forwarded` to version 0.1.2 or higher.

## References
- [Github Issue](https://github.com/jshttp/forwarded/issues/3)
- [Github Commit](https://github.com/jshttp/forwarded/commit/d469116eda4931fbe1c0ccb29497b35930bfa328)
