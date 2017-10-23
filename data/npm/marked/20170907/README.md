## Overview
[`marked`](https://www.npmjs.com/package/marked) is a full-featured markdown parser and compiler.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks when parsing the input markdown content (1,000 characters costs around 6 seconds matching time).

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
There is no fix version yet. At time of writing, latest version is `0.3.6`.

## References
- [Github Issue](https://github.com/chjj/marked/issues/937)
