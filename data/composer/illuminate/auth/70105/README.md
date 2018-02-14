# Overview
Affected versions of [`illuminate/auth`](https://packagist.org/packages/illuminate/auth) are vulnerable to Authentication Cookie Hijacking.
If a `"remember"` cookie was hijacked by another malicious user, the cookie would remain valid for a long period of time, even after the true owner of the account reset their password, logged out, etc.

## Remediation
Upgrade `illuminate/auth` to version 4.1.26 or higher.

## References
- [Laravel Release Notes](https://laravel.com/docs/5.1/upgrade#upgrade-4.1.26)
