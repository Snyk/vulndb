## Overview
[`rack-protection`](https://rubygems.org/gems/rack-protection) helps protect against typical web attacks.

Affected versions of the package are vulnerable to Timing Attack due to time-variable comparison of signatures. A malicious user can guess a valid signature one char at a time by considering the time it takes a signature validation to fail.

You can read more about timing attacks on our [blog](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/)

## Remediation
Upgrade `rack-protection` to version 2.0.0.rc3 or higher.

## References
- [Github Commit](https://github.com/sinatra/sinatra/commit/8aa6c42ef724f93ae309fb7c5668e19ad547eceb)
