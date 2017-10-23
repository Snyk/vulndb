## Overview
[`slug`](https://www.npmjs.com/package/slug) is a package that slugifies every string.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS). It uses the following regex `/^\s+|\s+$/g` in order to trim whitespaces, which can cause a slowdown of 2 seconds for 50k characters.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
There is no fix version for `slug`.

## References
- [Github PR](https://github.com/dodo/node-slug/pull/83)
- [Github Issue](https://github.com/dodo/node-slug/issues/82)
- [Github Commit](https://github.com/zhuangya/node-slug/commit/e82fccc6b3d850227560db659b17df0e242ae51b)
