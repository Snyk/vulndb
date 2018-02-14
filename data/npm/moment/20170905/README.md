## Overview
[`moment`](https://www.npmjs.com/package/moment) is a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks. It used a regular expression (`/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i`) in order to parse dates specified as strings. This can cause a very low impact of about 2 seconds matching time for data 50k characters long.

## Details
The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `moment` to version `2.19.3` or higher.


## References
- [GitHub Issue](https://github.com/moment/moment/issues/4163)
