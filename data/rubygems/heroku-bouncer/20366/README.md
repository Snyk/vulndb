## Overview
[`heroku-bouncer`](https://rubygems.org/gems/heroku-bouncer) is a Rack middleware that requires Heroku OAuth on all requests.

Affected versions of the package are vulnerable to Open Redirection after the login process.

## Remediation
Upgrade `heroku-bouncer` to version 0.4.1 or higher.

## References
- [GitHub PR](https://github.com/heroku/heroku-bouncer/pull/31)
- [GitHub Commit](https://github.com/heroku/heroku-bouncer/commit/f039e1dde203077aa4a654440a3e31427cd941ff)
