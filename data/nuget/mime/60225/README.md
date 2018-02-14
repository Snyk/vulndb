## Overview
[`mime`](https://www.npmjs.com/package/mime) is a comprehensive, compact MIME type module.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS). It uses regex the following regex `/.*[\.\/\\]/` in its lookup, which can cause a slowdown of 2 seconds for 50k characters.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `mime` to versions 1.4.1, 2.0.3 or higher.

## References
- [Github Issue](https://github.com/broofa/node-mime/issues/167)
- [Github Commit 1.x](https://github.com/broofa/node-mime/commit/855d0c4b8b22e4a80b9401a81f2872058eae274d)
- [Github Commit 2.0.x](https://github.com/broofa/node-mime/commit/1df903fdeb9ae7eaa048795b8d580ce2c98f40b0)
