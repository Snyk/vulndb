## Overview
[`parsejson`](https://www.npmjs.com/package/parsejson) is a Method that parses a JSON string and returns a JSON object.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks. An attacker may pass a specially crafted JSON data, causing the server to hang.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a Regex string and cause the service to hang for a large periods of time.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
There is no fix available.

## References
- [Github Issue](https://github.com/get/parsejson/issues/4)

