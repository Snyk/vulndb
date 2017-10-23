## Overview
[`method-override`](https://www.npmjs.com/package/method-override) is a module to override HTTP verbs.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS). It uses regex the following regex `/ *, */` in order to split HTTP headers. An attacker may send specially crafted input in the `X-HTTP-Method-Override` header and cause a significant slowdown.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `method-override` to version 2.3.10 or higher.

## References
- [Github Changelog](https://github.com/expressjs/method-override/blob/master/HISTORY.md#2310--2017-09-27)
- [Github Commit](https://github.com/expressjs/method-override/commit/4c58835a61fdf7a8e070d6f8ecd5379a961d0987)
