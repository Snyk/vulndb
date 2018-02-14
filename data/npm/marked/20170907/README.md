## Overview
[`marked`](https://www.npmjs.com/package/marked) is a full-featured markdown parser and compiler.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks when parsing the input markdown content (1,000 characters costs around 6 seconds matching time).

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `marked` to version 0.3.9 or higher.
In the meantime, you can patch the vulnerability using [Snyk wizard](https://snyk.io/docs/using-snyk/#wizard).

## References
- [Github Issue](https://github.com/chjj/marked/issues/937)
- [GitHub Issue - Release 0.3.9 status](https://github.com/chjj/marked/pull/958)
