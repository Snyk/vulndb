## Overview

[`ruby-saml`](https://rubygems.org/gems/ruby-saml) is a SAML toolkit for Ruby on Rails.

Affected versions contain a flaw that is triggered as the URI value of a SAML response is not properly sanitized through a prepared statement. This may allow a remote attacker to execute arbitrary shell commands on the host machine.

## References

- http://rubysec.com/advisories/OSVDB-117903
