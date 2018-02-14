# Overview
Affected versions of [`cartalyst/sentry`](https://packagist.org/packages/cartalyst/sentry) are vulnerable to Insufficient Password Verification. The schema for Eloquent-based users has `reset_password_code` set to `NULL` by default. The check for correct `$resetCode` simply does an equality comparison and returns true if there is a loose match.

If an attacker is able to provide a null reset code to the package, there are no guards against arbitrary anonymous password resets. In many cases, submitting a url-encoded null byte value (`%00`) will match what's in the database, passing the check and allowing the attacker to set the password to what they wish.


## Remediation
Upgrade `cartalyst/sentry` to version 2.1.7 or higher.

## References
- [Github PR](https://github.com/cartalyst/sentry/pull/545)
- [Github Commit](https://github.com/cartalyst/sentry/commit/c679730b8848686f59125cd821bf94946fb16a94)
