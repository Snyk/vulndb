## Overview
[`timespan`](https://www.npmjs.com/package/timespan) is a JavaScript TimeSpan library for node.js (and soon the browser).

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS). It parses dates using regex strings, which may cause a slowdown of 10 seconds per 50k characters.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
There is no fix version for `timespan`.

## References
- [Github Issue](https://github.com/indexzero/TimeSpan.js/issues/10)
