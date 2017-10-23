## Overview
[`debug`](https://www.npmjs.com/package/debug) is a JavaScript debugging utility modelled after Node.js core's debugging technique..

`debug` uses [printf-style](https://wikipedia.org/wiki/Printf_format_string) formatting. Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks via the the `%o` formatter (Pretty-print an Object all on a single line). It used a regular expression (`/\s*\n\s*/g`) in order to strip whitespaces and replace newlines with spaces, in order to join the data into a single line. This can cause a very low impact of about 2 seconds matching time for data 50k characters long.

The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach extreme situations that cause them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a specially crafted input and cause the service to excessively consume CPU, resulting in a Denial of Service.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Remediation
Upgrade `debug` to version 2.6.9, 3.1.0 or higher.

## References
- [GitHub Issue](https://github.com/visionmedia/debug/issues/501)
- [GitHub PR](https://github.com/visionmedia/debug/pull/504)
