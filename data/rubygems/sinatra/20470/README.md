## Overview
[`sinatra`](https://rubygems.org/gems/sinatra) is a DSL for quickly creating web applications in Ruby with minimal effort.

Affected versions of the package are vulnerable to Timing Attack.
`sinatra` did not use a constant time comparison for the CSRF tokens. As a result, the comparison will fail faster when the first characters in the token are incorrect. An attacker can use this difference to perform a timing attack.

## Remediation
Upgrade `sinatra` to version 2.0.0.beta2 or higher.

## References
- [Github Commit](https://github.com/sinatra/sinatra/commit/8aa6c42ef724f93ae309fb7c5668e19ad547eceb)
