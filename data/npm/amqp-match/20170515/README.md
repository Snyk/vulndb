## Overview
[`amqp-match`](https://www.npmjs.com/package/amqp-match) is simple library for matching amqp routing tokens, with \*'s and \#'s.
Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks.
PoC by Sean Nicolas:
```js
const match = require('amqp-match');

//Terminates fast
console.log(match('foo', '#.bar'));

//Takes too long
console.log(match('foooooooooooooooooooooooooo', '#.bar'));
```

## Details
The Regular expression Denial of Service (ReDoS) is a type of Denial of Service attack. Many Regular Expression implementations may reach edge cases that causes them to work very slowly (exponentially related to input size), allowing an attacker to exploit this and can cause the program to enter these extreme situations by using a Regex string and cause the service to hang for a large periods of time.

You can read more about `Regular Expression Denial of Service (ReDoS)` on our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

Thanks to [Sean Nicholas](https://github.com/sean-nicholas) for disclosing this vulnerability to us!

## Disclosure Timeline
- February 9th, 2017 - Vulnerability reported to package owner
- February 9th, 2017 - Acknowledged by package owner

## Remediation
There is no fix version for `amqp-match`.
