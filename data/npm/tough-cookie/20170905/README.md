## Overview
[`tough-cookie`](https://www.npmjs.com/package/tough-cookie) is RFC6265 Cookies and Cookie Jar for node.js.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks. An attacker may pass a specially crafted cookie, causing the server to hang.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a Regex string and cause the service to hang for a large periods of time.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade to version `2.3.3` or newer.

## References
- [Github Issue](https://github.com/salesforce/tough-cookie/issues/92)

