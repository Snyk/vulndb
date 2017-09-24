## Overview
[`rack-cas`](https://rubygems.org/gems/rack-cas) is a simple CAS authentication for Rails, Sinatra or any Rack-based site.

Affected versions of the package are vulnerable to Open Redirection. It is possible to cause a seemingly trustworthy link redirect to a malicious site, controlled by an attacker, allowing them to conduct a phishing scam to steal user credentials.

## Remediation
There is no fix version for `rack-cas`.

## References
- [Github PR](https://github.com/biola/rack-cas/pull/70)
