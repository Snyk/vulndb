## Overview
[`fresh`](https://www.npmjs.com/package/fresh) is HTTP response freshness testing.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks. A Regular Expression (`/ *, */`) was used for parsing HTTP headers and take about 2 seconds matching time for 50k characters.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `fresh` to version 0.5.2 or higher.

## References
- [Github Issue](https://github.com/jshttp/fresh/issues/24)
- [Github Commit](https://github.com/jshttp/fresh/commit/21a0f0c2a5f447e0d40bc16be0c23fa98a7b46ec)
