## Overview
[`clearance`](https://rubygems.org/gems/clearance) is an authentication app for rails.

Affected versions of the package are vulnerable to Timing Attack. When attempting to authenticate a user, but no user was found with the provided email address, it skips calls to` BCrypt`. This allows attackers to time the response from the app to see if the provided user has an account, and help when attempting to guess a users password.

## Remediation
There is no fix version for `clearance`.

## References
- [Github Issue](https://github.com/thoughtbot/clearance/issues/636)
