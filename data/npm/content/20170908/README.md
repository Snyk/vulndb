## Overview
[`content`](https://www.npmjs.com/package/content) is HTTP Content-* headers parsing.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks. An attacker may pass a specially crafted `Content-Type` or `Content-Disposition` header, causing the server to hang.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `content` to version 3.0.6 or higher.

## References
- [Github Issue](https://github.com/hapijs/content/issues/14)
- [Github Commit](https://github.com/hapijs/content/commit/3a8a6cbaf111955ec514019c2122cb278cc36a23)
